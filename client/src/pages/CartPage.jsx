import Header from "../components/Header";
import Button from "../components/Btn";
import { CartWrapper } from "../styles/CartPage.style";
import { useEffect, useState } from "react";
import {
  TableBody,
  TableBodyCell,
  TableHeader,
  TableHeaderCell,
  TableWrapper,
} from "../styles/Table.style";
import CartCardActions from "../components/CartCardActions";
import CurrencySwitcher from "../components/CurrencySwitcher";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isInCart] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/cartItems")
      .then((response) => response.json())

      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <>
      <Header title="Your Shopping Cart" />
      {isInCart ? (
        <CartWrapper>
          <CurrencySwitcher />
          <TableWrapper>
            <TableHeader>
              <TableHeaderCell>Coffee</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Quantity</TableHeaderCell>
              <TableHeaderCell>Subtotal</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableHeader>

            {cartItems.map(({ id, name, price, quantity }) => (
              <TableBody key={id}>
                <TableBodyCell>{name}</TableBodyCell>
                <TableBodyCell>${price}</TableBodyCell>
                <TableBodyCell>{quantity}</TableBodyCell>
                <TableBodyCell>${price * quantity}</TableBodyCell>
                <TableBodyCell>
                  <Button title="Remove" />
                </TableBodyCell>
              </TableBody>
            ))}
          </TableWrapper>
          <CartCardActions />
        </CartWrapper>
      ) : (
        <CartWrapper>
          <h1>Your cart is empty</h1>
          <p>Add some delicious coffee to your cart!</p>
          <Button url="/" title="Back to Shop" />
        </CartWrapper>
      )}
    </>
  );
}

export default CartPage;
