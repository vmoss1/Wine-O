import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data?.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <div id="login-form-container">
        <h1>Welcome Back!</h1>
        <div id="login-form-form">
          <form id="login-form-form" onSubmit={handleSubmit}>
            Username or Email
            <label>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            Password
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {errors.credential && <p>{errors.credential}</p>}
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
