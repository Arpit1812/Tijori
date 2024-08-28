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

// src/pages/SignUpForm.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setError(null); // Reset error state before new attempt

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });

      console.log('Response:', response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store JWT token
        navigate('/dashboard'); // Redirect to dashboard after signup
      }
    } catch (err: any) {
      console.error('Error:', err);
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Error registering. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/SignUpForm.css';
// import { signup } from '../api/signup';

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
//       await signup(signUpData.username, signUpData.password, signUpData.email);
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
