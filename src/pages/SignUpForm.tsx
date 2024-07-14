// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/SignUpForm.css";

// const SignUpForm = () => {
//   const [signUpData, setSignUpData] = useState({
//     username: "",
//     password: "",
//     email: "",
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setSignUpData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(signUpData),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("Signup successful:", data);
//       setError(null);
//       // Optionally, redirect to login page or show success message
//     } catch (error: any) {
//       console.error("Error signing up:", error.message);
//       setError("An error occurred during signup. Please try again later.");
//     }
//   };

//   const handleCancelClick = () => {
//     setSignUpData({
//       username: "",
//       password: "",
//       email: "",
//     });
//   };

//   return (
//     <div className="sign-up">
//       <div className="heading-div">
//         <h1 className="sign-up-heading">SIGN-UP</h1>
//       </div>
//       <div id="sign-up-section" className="sign-up-section">
//         <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
//           <div className="flex-container">
//             <label>
//               Username
//               <input
//                 required
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={signUpData.username}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex-container">
//             <label>
//               Password
//               <input
//                 required
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={signUpData.password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex-container">
//             <label>
//               Email Id
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={signUpData.email}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="buttons">
//             <button type="submit" className="sign-up-button" id="sign-up-button">
//               Submit
//             </button>
//             <button
//               type="button"
//               className="cancel-button"
//               id="cancel-button"
//               onClick={handleCancelClick}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//         <div className="redirect">
//           {error && <p className="error">{error}</p>}
//           <p>
//             Already a member? <br />
//             <Link to="/login" className="redirect-link">
//               Sign-in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;


// src/pages/SignUpForm.tsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/SignUpForm.css';

// const SignUpForm: React.FC = () => {
//   const [signUpData, setSignUpData] = useState({ username: '', password: '', email: '' });
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setSignUpData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signUpData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Signup successful:', data);
//       setError(null);
//       navigate('/login');
//     } catch (error: any) {
//       setError('An error occurred during signup. Please try again later.');
//     }
//   };

//   const handleCancelClick = () => {
//     setSignUpData({ username: '', password: '', email: '' });
//   };

//   return (
//     <div className="sign-up">
//       <div className="heading-div">
//         <h1 className="sign-up-heading">SIGN-UP</h1>
//       </div>
//       <div id="sign-up-section" className="sign-up-section">
//         <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
//           <div className="flex-container">
//             <label>
//               Username
//               <input
//                 required
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={signUpData.username}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex-container">
//             <label>
//               Password
//               <input
//                 required
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={signUpData.password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex-container">
//             <label>
//               Email Id
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={signUpData.email}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="buttons">
//             <button type="submit" className="sign-up-button" id="sign-up-button">
//               Submit
//             </button>
//             <button
//               type="button"
//               className="cancel-button"
//               id="cancel-button"
//               onClick={handleCancelClick}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//         <div className="redirect">
//           {error && <p className="error">{error}</p>}
//           <p>
//             Already a member? <br />
//             <Link to="/login" className="redirect-link">
//               Sign-in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// // src/pages/SignUpForm.tsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/SignUpForm.css';

// const SignUpForm: React.FC = () => {
//   const [signUpData, setSignUpData] = useState({ username: '', password: '', email: '' });
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setSignUpData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signUpData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Signup successful:', data);
//       setError(null);
//       navigate('/login');
//     } catch (error: any) {
//       setError('An error occurred during signup. Please try again later.');
//     }
//   };

//   const handleCancelClick = () => {
//     setSignUpData({ username: '', password: '', email: '' });
//   };

//   return (
//     <div className="sign-up">
//       <div className="heading-div">
//         <h1 className="sign-up-heading">SIGN-UP</h1>
//       </div>
//       <div id="sign-up-section" className="sign-up-section">
//         <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
//           <div className="flex-container">
//             <label>
//               Username
//               <input
//                 required
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={signUpData.username}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex-container">
//             <label>
//               Password
//               <input
//                 required
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={signUpData.password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex-container">
//             <label>
//               Email Id
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={signUpData.email}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="buttons">
//             <button type="submit" className="sign-up-button" id="sign-up-button">
//               Submit
//             </button>
//             <button
//               type="button"
//               className="cancel-button"
//               id="cancel-button"
//               onClick={handleCancelClick}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//         <div className="redirect">
//           {error && <p className="error">{error}</p>}
//           <p>
//             Already a member? <br />
//             <Link to="/login" className="redirect-link">
//               Sign-in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUpForm.css';
import { signup } from '../api/signup';

const SignUpForm: React.FC = () => {
  const [signUpData, setSignUpData] = useState({ username: '', password: '', email: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signup(signUpData.username, signUpData.password, signUpData.email);
      setError(null);
      navigate('/login');
    } catch (error: any) {
      setError('An error occurred during signup. Please try again later.');
    }
  };

  const handleCancelClick = () => {
    setSignUpData({ username: '', password: '', email: '' });
  };

  return (
    <div className="sign-up">
      <div className="heading-div">
        <h1 className="sign-up-heading">SIGN-UP</h1>
      </div>
      <div id="sign-up-section" className="sign-up-section">
        <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
          <div className="flex-container">
            <label>
              Username
              <input
                required
                type="text"
                name="username"
                id="username"
                value={signUpData.username}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex-container">
            <label>
              Password
              <input
                required
                type="password"
                id="password"
                name="password"
                value={signUpData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex-container">
            <label>
              Email Id
              <input
                required
                type="email"
                name="email"
                id="email"
                value={signUpData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="buttons">
            <button type="submit" className="sign-up-button" id="sign-up-button">
              Submit
            </button>
            <button
              type="button"
              className="cancel-button"
              id="cancel-button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="redirect">
          {error && <p className="error">{error}</p>}
          <p>
            Already a member? <br />
            <Link to="/login" className="redirect-link">
              Sign-in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
