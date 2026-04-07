import AllCoffeePage from "./pages/AllCoffeePage";
import SingleCoffeePage from "./pages/SingleCoffeePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCoffeePage />} />
          <Route path="/:id" element={<SingleCoffeePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
