import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
// import OpenModalButton from "../OpenModalButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = () => {
    dispatch(sessionActions.logout());
    closeMenu();
    setTimeout(() => {
      navigate("/");
    }, 50);
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="profile-dropdown-container">
      {user && (
        <div className="profile-button-container">
          <Link to={"/myProfile"} id="my-button">
            MyProfile
          </Link>
          <button onClick={toggleMenu} className="profile-button">
            <img id="user-photo" src={sessionUser?.profilePicture} alt="" />
          </button>
        </div>
      )}
      <div id="profile-button-dropdown">
        {user && showMenu && (
          <ul className={ulClassName} ref={ulRef}>
            <div id="ul-dropdown">
              <div id="ul-name-container">
                <div id="ul-names">
                  {user.firstName} {user.lastName}
                </div>
              </div>
              <div>
                <button id="logout-button" onClick={logout}>
                  Log Out
                </button>
              </div>
            </div>
          </ul>
        )}
      </div>
      {/* {!user && (
        <div className="login-signup-buttons">
          <OpenModalButton
            buttonText={<p id="nav-login-button">Log in</p>}
            onItemClick={closeMenu}
            modalComponent={<LoginFormPage />}
          />
          <OpenModalButton
            buttonText={<p id="nav-signup-button">Sign up</p>}
            onItemClick={closeMenu}
            modalComponent={<SignupFormPage />}
          />
        </div>
      )} */}
    </div>
  );
}

export default ProfileButton;
