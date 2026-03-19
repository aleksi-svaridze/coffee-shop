import { useEffect, useState } from "react";

import { NotificationBadge } from "../styles/NotificationBadge.styles";

function Badge() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/cartItems");
        const data = await response.json();

        const totalQuantity = data.reduce(
          (total, item) => total + item.quantity,
          0,
        );

        setTotalQuantity(totalQuantity);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return <NotificationBadge>{totalQuantity}</NotificationBadge>;
}

export default Badge;
