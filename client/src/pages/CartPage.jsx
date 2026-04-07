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
import { useCart } from "../context/CartContext";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(true);
  const { fetchCartCount } = useCart();

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

  const deleteItemInCart = (id) => {
    fetch(`http://localhost:3000/cartItems/${id}`, {
      method: "delete",
    }).then((res) => {
      if (res.ok) {
        setCartItems(cartItems.filter((item) => item.id !== id));
        console.log("Item in Cart deleted successfully");
        fetchCartCount();
      } else {
        console.error("Failed to delete item in Cart");
      }
    });
  };

  const deleteAllItemsInCart = async () => {
    try {
      const deletePromises = cartItems.map(
        (item) =>
          fetch(`http://localhost:3000/cartItems/${item.id}`, {
            method: "DELETE",
          }),
        setIsInCart(false),
      );

      await Promise.all(deletePromises);

      (setCartItems([]), fetchCartCount());
    } catch (error) {
      console.error("Error deleting all data:", error);
    }
  };

  return (
    <>
      <Header title="Your Shopping Cart" />
      {isInCart && cartItems.length > 0 ? (
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
                  <Button title="Remove" action={() => deleteItemInCart(id)} />
                </TableBodyCell>
              </TableBody>
            ))}
          </TableWrapper>
          <CartCardActions action={deleteAllItemsInCart} />
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
