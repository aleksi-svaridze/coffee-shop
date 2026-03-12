import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

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
      <div>
        <h1>{coffee.coffeeName}</h1>
        <span>{coffee.price}</span>
        <p>{coffee.description}</p>
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default SingleCoffeePage;
