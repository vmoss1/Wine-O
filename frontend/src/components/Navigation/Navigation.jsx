import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { motion } from "framer-motion";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <div>
        <motion.div id="nav-logo-container" whileHover={{ scale: 1.2 }}>
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
        </motion.div>
      </div>

      {isLoaded && <ProfileButton user={sessionUser} />}
    </nav>
  );
}

export default Navigation;
