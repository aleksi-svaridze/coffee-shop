import { useEffect, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import { CardContainer } from "../styles/AllCoffeePage.styles";
import Header from "../components/Header";

function AllCoffeePage() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffeeData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoffees(data);
      })
      .catch((error) => {
        console.error("Error fetching coffee data:", error);
      });
  }, []);

  return (
    <>
      <Header title="Coffee Selection" />
      <CardContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CardContainer>
    </>
  );
}

export default AllCoffeePage;
