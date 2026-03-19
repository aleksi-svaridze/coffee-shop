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
  const addToCart = async () => {
    const response = await fetch("http://localhost:3000/cartItems");
    const cartItems = await response.json();

    const existingItem = cartItems.find(
      (item) => item.name === coffee.coffeeName,
    );

    if (existingItem) {
      // update quantity
      await fetch(`http://localhost:3000/cartItems/${existingItem.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: existingItem.quantity + 1,
        }),
      });
    } else {
      // add new item
      await fetch("http://localhost:3000/cartItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: coffee.coffeeName,
          price: coffee.price,
          quantity: 1,
        }),
      });
    }
  };

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
          <Button title="Add to Cart" action={() => addToCart(coffee.id)} />
          <Button title="Details" url={`/${coffee.id}`} />
        </CardButtonWrapperDiv>
      </CardTextContentDiv>
    </Card>
  );
}

export default CoffeeCard;
