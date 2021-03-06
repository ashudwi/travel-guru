import React, { useState } from 'react';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { resetPassword, initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, signInWithEmailAndPassword } from '../Login/LoginManager';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const {setLoggedInUser}  = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }


    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {

    if (user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
    <>
      <Header></Header>
      <div
        style={{
          textAlign: 'center',
          paddingTop: "20px"
        }}>
        {/* show form */}
        <form
          onSubmit={handleSubmit}
          className="form-design">
          <label
            className="form-headline">
            Login
            </label>
          <br></br>
          <input
            className="input-text"
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="Your Email address"
            required />
          <br />
          <input
            className="input-text"
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Your Password"
            required />
          <br />
          <label
            className="remember"
            htmlFor="remember">
            <input
              className="remember-check"
              type="checkbox"
              id="remember"
              name="remember"
              value="remember" />
                 Remember Me
            </label>

          <button
            className="forget-btn"
            onClick={() => resetPassword(user.email)}>
            Forget Password
            </button>
          <br></br>
          <button
            className="submit-btn"
            type="submit">
            Sign In
            </button>
        </form>
        <span>
          Don't Have an account?
          <Link
            style={{ color: "#FFBD33" }}
            to="/createuser">
            Create An Account
            </Link>
        </span>
        <p
          style={{ color: 'red' }}>
          {user.error}
        </p>
        <h5
          className="horizontal-text">
          <span>
            OR
            </span>
        </h5>
        <button
          className="another-sign-btn"
          onClick={googleSignIn}>
          <FontAwesomeIcon
            className="brand-icon"
            icon={faGoogle} />
            Continue With Google
            </button>
        <br />
        <button
          className="another-sign-btn"
          onClick={fbSignIn}>
          <FontAwesomeIcon
            className="brand-icon"
            icon={faFacebook} />
            Continue With Facebook
            </button>
      </div>
    </>
  );
}

export default Login;

