import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import './All.css'; 

function Forgot() {
  const navigate = useNavigate();
  const handleReturnHomeClick = () => {
    navigate('/home');
  };
 

  return (
    <section className="login">
      <div className="login_box">
        <div className="left">
        <div className="top_link">
            <a href="#home" onClick={handleReturnHomeClick}>
              <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="Return home" />
              Return home
            </a>
          </div>
          <div className="contact">
            <form action="">
              <h3>LOGIN IN</h3>
              <input type="text" placeholder="USERNAME" />
              <input type="password" placeholder="RESET PASSWORD" />
              <input type="password" placeholder="CONFIRM PASSWORD" />
              <button className="submit" >LOGIN</button>
              
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-text">
           
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Forgot;
