import {
  Card,
  CardButtonWrapperDiv,
  CardCurrency,
  CardDescription,
  CardImg,
  CardPrice,
  CardPriceWrapperDiv,
  CardTextContentDiv,
  CardTitle,
} from "../styles/CoffeeCard.style";
import Button from "./Btn";

function CoffeeCard({ coffee }) {
  return (
    <Card>
      <CardImg src={coffee.imageUrl} alt={coffee.coffeeName} />
      <CardTextContentDiv>
        <CardTitle>{coffee.coffeeName}</CardTitle>
        <CardDescription>
          {coffee.description.length > 70
            ? coffee.description.substring(0, 70)
            : coffee.description}
        </CardDescription>
        <CardPriceWrapperDiv>
          <CardPrice>${coffee.price.toFixed(2)}</CardPrice>
          <CardCurrency>USD</CardCurrency>
        </CardPriceWrapperDiv>
        <CardButtonWrapperDiv>
          <Button title="Add to Cart" />
          <Button title="Details" url={`/${coffee.id}`} />
        </CardButtonWrapperDiv>
      </CardTextContentDiv>
    </Card>
  );
}

export default CoffeeCard;
