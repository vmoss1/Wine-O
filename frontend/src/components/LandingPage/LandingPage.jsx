import { motion } from "framer-motion";
import OpenModalButton from "../OpenModalButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div id="landing-page-container">
        <motion.div id="lp-login-container" whileHover={{ scale: 1.2 }}>
          <OpenModalButton
            buttonText={<h2 id="lp-login-h2">Login</h2>}
            modalComponent={<LoginFormPage />}
          />
        </motion.div>
        <motion.div id="lp-signup-container" whileHover={{ scale: 1.2 }}>
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
