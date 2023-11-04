
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './All.css';

function Login() {
  const navigate = useNavigate();

  const handleReturnHomeClick = () => {
    navigate("/home");
  };
  const handleForgotClick = () => {
    navigate("/forgot");
  };
 

  return (
    <section className="login">
      <div className="login_box">
        <div className="left">
          <div className="top_link">
          <a href="#home" 
          onClick={handleReturnHomeClick}>
              <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="Return home" />
              Return home
            </a>
          </div>
          <div className="contact">
            <form action="">
              <h3>LOGIN </h3>
              <input type="text" placeholder="USERNAME" />
              <input type="password" placeholder="PASSWORD" />
              <button className="submit" >LET'S GO</button>
              <div className="text-center">
              <a href="#forgot" onClick={handleForgotClick} className="forgot-password-link">
                 Forgot Password?
               </a>
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-text">
            {/* <h2>LONYX</h2>
            <h5>A UX BASED CREATIVE AGENCY</h5> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

