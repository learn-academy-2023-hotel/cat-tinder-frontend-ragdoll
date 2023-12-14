import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import dogLogo from "../assets/dog-silouette.png";
import "../App.css";

const Header = () => {
  return (
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/" className="nav-link">
          <img
            src={dogLogo}
            alt="Dog Tinder logo with outline of dog"
            className="dog-logo"
          />
        </NavLink>
      </NavItem>
      <div className="links">
        <NavItem>
          <NavLink to="/dogindex" className="nav-link">
            Meet the Dogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dognew" className="nav-link">
            Add a New Dog
          </NavLink>
        </NavItem>
        <NavItem>
          <a
            target="blank"
            href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
            className="nav-link"
          >
            Adopt a Dog!
          </a>
        </NavItem>
      </div>
    </Nav>
  );
};

export default Header;
