import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);

  const fetchCartCount = async () => {
    try {
      const response = await fetch("http://localhost:3000/cartItems");
      const data = await response.json();
      // ვაჯამებთ ყველა პროდუქტის quantity-ს
      const count = data.reduce((acc, item) => acc + item.quantity, 0);
      setTotalItems(count);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ totalItems, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
