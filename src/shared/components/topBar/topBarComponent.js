import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

const TopBarComponent = () => {
  const [currentUserState] = useContext(CurrentUserContext);
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
          {currentUserState.isLoggedIn && (
            <>
              <li className={"nav-item"}>
                <NavLink to={"/articles/new"}>
                  <i className={"ion-compose"}></i>
                  New Article
                </NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink to={`/profiles/}`}>
                  <i className={"ion-compose"}></i>
                  <img
                    className={"user-pic"}
                    src={currentUserState.currentUser.image}
                    alt={"user image"}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                    }}
                  />
                </NavLink>
              </li>
            </>
          )}

          {!currentUserState.isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/login">Sign in</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/register">Sign up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default TopBarComponent;
