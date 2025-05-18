import React from 'react'
import '../styles/css/signup.css'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
   



<div className="login-container">
      <div className="background-overlay">
        <nav className="nav">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
    alt="Netflix Logo"
    className="logo"
  />
  <div className="nav-right">
    <Link to="/login">
      <button className="sign-in">Sign In</button>
    </Link>
  </div>
</nav>


        <div className="center-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Starts at ₹149. Cancel at any time.</h2>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="email-form">
            <input id="email" type="email" placeholder="Email" />
            <button>Get Started</button>
          </div>
        </div>
      </div>

      <div className="trending-section">
  <h3 className="trending-title">Trending Now</h3>
  <div className="trending-scroll">
    {[
      { title: 'The Royals', image: '/assets/1.jpeg' },
      { title: 'Chhaava', image: '/assets/2.jpeg' },
      { title: 'Good Bad Ugly', image: '/assets/3.jpeg' },
      { title: 'The Diplomat', image: '/assets/4.jpeg' },
      { title: 'Jewel Thief', image: '/assets/5.jpeg' },
      { title: 'The Royals', image: '/assets/1.jpeg' },
      { title: 'Chhaava', image: '/assets/2.jpeg' },
      { title: 'Good Bad Ugly', image: '/assets/3.jpeg' },
      { title: 'The Diplomat', image: '/assets/4.jpeg' },
      { title: 'Jewel Thief', image: '/assets/5.jpeg' }
    ].map((item, index) => (
      <div className="trending-card" key={index}>
        <img src={item.image} alt={item.title} />
        <span className="rank-number">{index + 1}</span>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default SignUp