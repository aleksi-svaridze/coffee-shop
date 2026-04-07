import { Outlet } from "react-router-dom";
import {
  LogoText,
  Main,
  Nav,
  NavStyledLink,
  TemplateLayout,
} from "../styles/TemplateLayout";
import { NotificationBadge } from "../styles/NotificationBadge.styles";
import Badge from "../components/Badge";
import { useCart } from "../context/CartContext";

function Layout() {
  const { totalItems } = useCart();
  return (
    <TemplateLayout>
      <Nav>
        <LogoText>Bean Brew</LogoText>
        <NavStyledLink to={"/"}>Coffee Menu</NavStyledLink>
        <NavStyledLink to={"/cart"}>
          Cart {totalItems > 0 && <p>{totalItems}</p>}
        </NavStyledLink>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </TemplateLayout>
  );
}

export default Layout;
