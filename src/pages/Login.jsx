import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/login.css'

function Login() {
  return (
      <div className="signin-page">
      <div className="overlay">
        <div className="logo">
          <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
    alt="Netflix Logo"
    className="logo"
  />
        </div>
        <div className="signin-box">
          <h1>Sign In</h1>

          <label htmlFor="email" className="input-label">Email or mobile number</label>
          <input id="email" type="text" placeholder="Email or mobile number" />

          <label htmlFor="password" className="input-label">Password</label>
          <input id="password" type="password" placeholder="Password" />

          <button className="signin-btn">Sign In</button>

          <div className="or-divider">OR</div>

          <button className="signin-code-btn">Use a sign-in code</button>

          <Link to="#" className="forgot">Forgot password?</Link>

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="signup-text">
            New to Netflix? <Link to="/signup">Sign up now.</Link>
          </div>

          <p className="captcha-note">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#">Learn more.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login