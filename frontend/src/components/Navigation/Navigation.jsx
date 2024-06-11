import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import { PiWineDuotone } from "react-icons/pi";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <div>
        <div id="nav-logo-container">
          <NavLink id="nav-logo" to="/">
            <img id="nav-wine-logo" src="./public/wineologo.png" alt="" />
          </NavLink>
          {sessionUser && (
            <>
              <Link to={"/"} id="home-button">
                Create
              </Link>
            </>
          )}
        </div>
      </div>

      {isLoaded && <ProfileButton user={sessionUser} />}
    </nav>
  );
}

export default Navigation;
