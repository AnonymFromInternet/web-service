import { Link, NavLink } from "react-router-dom";

const TopBarComponent = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/">Main Page</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login">Sign in</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default TopBarComponent;
