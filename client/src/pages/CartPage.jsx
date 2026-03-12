import Header from "../components/Header";
import Button from "../components/Btn";
import { CartWrapper } from "../styles/CartPage.style";
import { useState } from "react";
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
  const [isInCart] = useState(true);
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

            <TableBody>
              <TableBodyCell>Coffee</TableBodyCell>
              <TableBodyCell>Price</TableBodyCell>
              <TableBodyCell>Quantity</TableBodyCell>
              <TableBodyCell>Subtotal</TableBodyCell>
              <TableBodyCell>Action</TableBodyCell>
            </TableBody>

            <TableBody>
              <TableBodyCell>Coffee</TableBodyCell>
              <TableBodyCell>Price</TableBodyCell>
              <TableBodyCell>Quantity</TableBodyCell>
              <TableBodyCell>Subtotal</TableBodyCell>
              <TableBodyCell>Action</TableBodyCell>
            </TableBody>
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
