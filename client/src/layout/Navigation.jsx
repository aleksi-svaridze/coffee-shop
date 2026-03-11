import { Link, Outlet } from "react-router-dom";
import { TemplateLayout } from "../styles/TemplateLayout";

function Navigation() {
  return (
    <TemplateLayout>
      <nav>
        <Link to={"/"}>Coffee Menu</Link>
        <Link to={"/cart"}>Cart</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </TemplateLayout>
  );
}

export default Navigation;
