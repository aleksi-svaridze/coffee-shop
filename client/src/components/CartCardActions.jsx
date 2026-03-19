import {
  ActionButtonsWrapper,
  CartCardActionsWrapper,
  TotalPrice,
} from "../styles/CartCardActions.styles";
import Button from "./Btn";

function CartCardActions({ action }) {
  return (
    <CartCardActionsWrapper>
      <TotalPrice>
        Total: $<span>0.00</span>
      </TotalPrice>
      <ActionButtonsWrapper>
        <Button url={"#"} title={"purchase"} />
        <Button url={"#"} title={"Clear Cart"} action={action} />
      </ActionButtonsWrapper>
    </CartCardActionsWrapper>
  );
}

export default CartCardActions;
