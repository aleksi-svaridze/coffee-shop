import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  CardTextContent,
} from "../styles/SingleCoffeePage.style";

function SingleCoffeePage() {
  const params = useParams();
  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/coffeeData/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  });
  return (
    <>
      <Header title="Coffee Details" />
      <CardContainer>
        <CardImage src={coffee.imageUrl} alt={coffee.coffeeName} />
        <CardTextContent>
          <h1>{coffee.coffeeName}</h1>
          <span>${coffee.price}</span>
          <p>{coffee.description}</p>
          <button>Add to cart</button>
        </CardTextContent>
      </CardContainer>
    </>
  );
}

export default SingleCoffeePage;
