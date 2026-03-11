import AllCoffeePage from "./pages/AllCoffeePage";
import SingleCoffeePage from "./pages/SingleCoffeePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./layout/Navigation";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<AllCoffeePage />} />
        <Route path="/single-coffee" element={<SingleCoffeePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
