import { Link, Outlet } from "react-router-dom";
import {
  LogoText,
  Main,
  Nav,
  NavStyledLink,
  TemplateLayout,
} from "../styles/TemplateLayout";

function Layout() {
  return (
    <TemplateLayout>
      <Nav>
        <LogoText>Bean Brew</LogoText>
        <NavStyledLink to={"/"}>Coffee Menu</NavStyledLink>
        <NavStyledLink to={"/cart"}>Cart</NavStyledLink>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </TemplateLayout>
  );
}

export default Layout;
