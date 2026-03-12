import { Link, Outlet } from "react-router-dom";
import { Main, Nav, TemplateLayout } from "../styles/TemplateLayout";

function Layout() {
  return (
    <TemplateLayout>
      <Nav>
        <Link to={"/"}>Coffee Menu</Link>
        <Link to={"/cart"}>Cart</Link>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </TemplateLayout>
  );
}

export default Layout;
