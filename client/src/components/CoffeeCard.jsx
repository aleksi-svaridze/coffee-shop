import { useState } from "react";
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
import Popup from "./Popup";
import { useCart } from "../context/CartContext";

function CoffeeCard({ coffee }) {
  const [popup, setPopup] = useState(false);
  const { fetchCartCount } = useCart(); // 2. გამოიძახე ჰუკი

  const addToCart = async () => {
    const response = await fetch("http://localhost:3000/cartItems");
    const cartItems = await response.json();

    const existingItem = cartItems.find(
      (item) => item.name === coffee.coffeeName,
    );

    if (existingItem) {
      await fetch(`http://localhost:3000/cartItems/${existingItem.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
      });
    } else {
      await fetch("http://localhost:3000/cartItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: coffee.coffeeName,
          price: coffee.price,
          quantity: 1,
        }),
      });
    }

    setPopup(true);
    fetchCartCount(); // 3. აი, ეს არის მთავარი! ბაზის განახლების მერე ვაახლებთ State-ს
  };
  // const [popup, setPopup] = useState(false);

  // const addToCart = async () => {
  //   const response = await fetch("http://localhost:3000/cartItems");
  //   const cartItems = await response.json();

  //   const existingItem = cartItems.find(
  //     (item) => item.name === coffee.coffeeName,
  //   );

  //   if (existingItem) {
  //     // update quantity
  //     await fetch(`http://localhost:3000/cartItems/${existingItem.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         quantity: existingItem.quantity + 1,
  //       }),
  //     });
  //     setPopup(true);
  //   } else {
  //     // add new item
  //     await fetch("http://localhost:3000/cartItems", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: coffee.coffeeName,
  //         price: coffee.price,
  //         quantity: 1,
  //       }),
  //     });
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPopup(false);
  //   }, 1000);
  // });

  return (
    <Card>
      {popup && <Popup />}

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
