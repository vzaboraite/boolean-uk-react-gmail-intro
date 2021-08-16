import IconsList from "./IconsList";
import Pagination from "./Pagination";

function Nav() {
  return (
    <nav className="email-toolbar">
      <IconsList />
      <div className="space"></div>
      <Pagination />
    </nav>
  );
}

export default Nav;
