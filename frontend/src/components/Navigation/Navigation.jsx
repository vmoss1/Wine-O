import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { motion } from "framer-motion";
import OpenModalButton from "../OpenModalButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <div id="landing-page-container">
        <motion.div id="lp-login-container" whileHover={{ scale: 1.1 }}>
          <OpenModalButton
            buttonText={<h2 id="lp-login-h2">Login</h2>}
            modalComponent={<LoginFormPage />}
          />
        </motion.div>

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

        <motion.div id="lp-signup-container" whileHover={{ scale: 1.1 }}>
          <OpenModalButton
            buttonText={<h2 id="lp-signup-h2">Signup</h2>}
            modalComponent={<SignupFormPage />}
          />
        </motion.div>
      </div>
      {isLoaded && <ProfileButton user={sessionUser} />}
    </nav>
  );
}

export default Navigation;
