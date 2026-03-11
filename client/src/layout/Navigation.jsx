import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <Link to={"/"}>Coffee Menu</Link>
        <Link to={"/cart"}>Cart</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;
