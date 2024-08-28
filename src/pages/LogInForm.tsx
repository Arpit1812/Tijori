// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/LogInForm.css";

// const LogInForm = () => {
//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });

//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("Login successful:", data);
//       setError(null);
//       // Optionally, save the token to localStorage or context
//       localStorage.setItem("token", data.token);
//       // Redirect to a protected route
//       navigate("/documentManager");
//     } catch (error: any) {
//       console.error("Error logging in:", error.message);
//       setError("Invalid username or password. Please try again.");
//     }
//   };

//   return (
//     <div className="login">
//       <div className="heading-div">
//         <h1 className="login-heading">LOGIN</h1>
//       </div>
//       <div id="login-section" className="login-section">
//         <form id="login-form" method="post" onSubmit={handleSubmit}>
//           <div className="flex-container">
//             <label>
//               Username
//               <input
//                 required
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={loginData.username}
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
//                 value={loginData.password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="buttons">
//             <button type="submit" className="login-button" id="login-button">
//               Submit
//             </button>
//           </div>
//         </form>
//         <div className="redirect">
//           {error && <p className="error">{error}</p>}
//           <p>
//             Don't have an account? <br />
//             <Link to="/signup" className="redirect-link">
//               Sign-up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogInForm;

// src/pages/LogInForm.tsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/LogInForm.css';
// import { useAuth } from '../AuthContext';

// const LogInForm: React.FC = () => {
//   const [loginData, setLoginData] = useState({ username: '', password: '' });
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       await login(loginData.username, loginData.password);
//       setError(null);
//       navigate('/documentManager');
//     } catch (error: any) {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="heading-div">
//         <h1 className="login-heading">LOGIN</h1>
//       </div>
//       <div id="login-section" className="login-section">
//         <form id="login-form" method="post" onSubmit={handleSubmit}>
//           <div className="flex-container">
//             <label>
//               Username
//               <input
//                 required
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={loginData.username}
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
//                 value={loginData.password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="buttons">
//             <button type="submit" className="login-button" id="login-button">
//               Submit
//             </button>
//           </div>
//         </form>
//         <div className="redirect">
//           {error && <p className="error">{error}</p>}
//           <p>
//             Don't have an account? <br />
//             <Link to="/signup" className="redirect-link">
//               Sign-up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogInForm;

// // src/pages/LogInForm.tsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/LogInForm.css';
// import { useAuth } from '../AuthContext';

// const LogInForm: React.FC = () => {
//   const [loginData, setLoginData] = useState({ username: '', password: '' });
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       await login(loginData.username, loginData.password);
//       setError(null);
//       navigate('/documentManager');
//     } catch (error: any) {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="heading-div">
//         <h1 className="login-heading">LOGIN</h1>
//       </div>
//       <div id="login-section" className="login-section">
//         <form id="login-form" method="post" onSubmit={handleSubmit}>
//           <div className="flex-container">
//             <label>
//               Username
//               <input
//                 required
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={loginData.username}
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
//                 value={loginData.password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="buttons">
//             <button type="submit" className="login-button" id="login-button">
//               Submit
//             </button>
//           </div>
//         </form>
//         <div className="redirect">
//           {error && <p className="error">{error}</p>}
//           <p>
//             Don't have an account? <br />
//             <Link to="/signup" className="redirect-link">
//               Sign-up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogInForm;

import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const LogInForm: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>Don't have an account? <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>Sign Up</span></p>
    </div>
  );
};

export default LogInForm;
