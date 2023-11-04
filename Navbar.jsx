import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {
  // componentDidMount() {
  //   // Add JavaScript for scroll behavior here if needed
  // }

  render() {
    return (
      <header>
        {/* Background Image */}
        <div
          id="intro"
          className="bg-image vh-100"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?cs=srgb&dl=pexels-jessica-lewis-606539.jpg&fm=jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top  custom-navbar" style={{ backgroundColor: '#e0e0e0' }}>
              <div className="container">
                <a className="navbar-brand" href="#!">
                  <span style={{ color: '#5e9693' }}>DIGITAL</span>
                  <span style={{ color: '#fff' }}>JOURNAL     </span>
                </a>
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                      </Link>
                    </li>
                    {/* Add your navigation links here */}
                    
                    <li className="nav-item">
                    <Link to="/main" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/footer" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ">
                    <li className="nav-item ">
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                     </li>
                    <li className="nav-item ">
                      <Link to="/signup" className="nav-link">
                        Sign Up
                      </Link>
                    </li> 
                  </ul>
                </div>
              </div>
            </nav>
            {/* Navbar */}
  
        </div>
      </header>
    );
  }
}

export default Navbar;