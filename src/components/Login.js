import React from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picURL, setPicURL] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth.createUserWithEmailAndPassword(email,password).then(
        (userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: picURL,
            })
            .then(() => {
                dispatch(login ({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: picURL,
                }))
            })
        })
        .catch((error) => alert(error));


  };
  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://brand.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        ></input>
        <input
          value={picURL}
          onChange={(e) => setPicURL(e.target.value)}
          placeholder="profile pic URL (optional)"
          type="text"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></input>

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register here!
        </span>
      </p>
    </div>
  );
};

export default Login;
