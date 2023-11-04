import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import './All.css';


function Signup() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };
  
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
              <h3>SIGN UP</h3>
              <input type="text" placeholder="FULL NAME" />
             <input type="email" placeholder="EMAIL" />
             <input type="password" placeholder="PASSWORD" />
             <button className="submit" >REGISTER</button>
              <div className="text-center">
               <a href="#login" onClick={handleSignInClick} className="account-already-link">
                 Already have an account? Sign in
               </a>
          </div>
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

export default Signup;


// import React,{useState} from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css"
// // import { useNavigate } from 'react-router-dom';
// import './Signup.css';


// const RegisterPage=()=> {

//   const [Name, setName] = useState("");
//   const [Usn, setUsn] = useState("");
//   const [Gender, setGender] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Mobile, setMobile] = useState("");
//   const [Password, setPassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("localhost:4000/register", {
//         Name,
//         Email,
//         Password,
//       });
//       console.log(response);

//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error("Registration failed. Please try again.");
//     }
//   };
 

//   return (
//     <section className="login">
//       <div className="login_box">
//         <div className="left">
//           <div className="top_link">
            
//             <a href="#navbar">
//               <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="Return home" />
//               Return home
//             </a>
//           </div>
//           <div className="contact">
//             <form action="">
//               <h3>SIGN UP</h3>
//               <input type="text" placeholder="FULL NAME" value={Name}
//               onChange={(e) => setName(e.target.value)}/>
//              <input type="email" placeholder="EMAIL" value={Email}
//               onChange={(e) => setEmail(e.target.value)}/>
//              <input type="password" placeholder="PASSWORD" value={Password}
//               onChange={(e) => setPassword(e.target.value)} />

//              <button className="submit" onClick={handleRegister}>REGISTER</button>
//               <div className="text-center">
//                <a href="#login"  className="account-already-link">
//                  Already have an account? Sign in
//                </a>
//           </div>
//             </form>
//           </div>
//         </div>
//         <div className="right">
//           <div className="right-text">
            
//           </div>
        
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RegisterPage;
