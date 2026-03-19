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

function Layout() {
  return (
    <TemplateLayout>
      <Nav>
        <LogoText>Bean Brew</LogoText>
        <NavStyledLink to={"/"}>Coffee Menu</NavStyledLink>
        <NavStyledLink to={"/cart"}>
          Cart <Badge />
        </NavStyledLink>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </TemplateLayout>
  );
}

export default Layout;
