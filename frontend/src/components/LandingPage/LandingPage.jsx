import { motion } from "framer-motion";
import OpenModalButton from "../OpenModalButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div id="landing-page-about">
        <div id="landing-page-paragraph">
          <h3 id="landing-page-h3">
            Wine-O is a vibrant, neon-colored wine app designed for friends who
            love to share and rate their favorite wines. With a retro pixel
            theme, VinoVibe offers a fun and engaging way to explore new wines,
            keep track of your tasting experiences, and see what your friends
            are enjoying. Discover, rate, and discuss wines together, making
            every bottle a shared adventure!
          </h3>
        </div>
        <div id="landing-page-image">
          <img
            id="landing-page-wine-image"
            src="../public/wineo.png"
            alt="pixel-wine-photo"
          />
        </div>
      </div>
      <div id="landing-page-container">
        <motion.div id="lp-login-container" whileHover={{ scale: 1.1 }}>
          <OpenModalButton
            buttonText={<h2 id="lp-login-h2">Login</h2>}
            modalComponent={<LoginFormPage />}
          />
        </motion.div>
        <motion.div id="lp-signup-container" whileHover={{ scale: 1.1 }}>
          <OpenModalButton
            buttonText={<h2 id="lp-signup-h2">Signup</h2>}
            modalComponent={<SignupFormPage />}
          />
        </motion.div>
      </div>
    </>
  );
}

export default LandingPage;
