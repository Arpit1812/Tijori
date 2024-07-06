// // src/App.tsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import Contact from "./pages/Contact";
// import SignUpForm from "./pages/SignUpForm";
// import PasswordManager from "./pages/PasswordManager";
// import DocumentManager from "./pages/DocumentManager";
// import DocumentForm from "./components/DocumentFormPage";
// import LogInForm from "./pages/LogInForm";
// import {uploadDocument} from './api/uploadDocument'; // Import API functions
// import {login} from './api/login'; // Import API functions

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [file, setFile] = useState<File | null>(null);

//   const handleLogin = async () => {
//     try {
//       const response = await login(username, password);
//       console.log('Login successful:', response);
//       // Redirect or handle success
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('document', file);

//       try {
//         const response = await uploadDocument(formData);
//         console.log('Upload successful:', response);
//         // Handle success (e.g., show success message)
//       } catch (error) {
//         console.error('Upload failed:', error);
//         // Handle error (e.g., show error message)
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/documentManager" element={<DocumentManager />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/signup" element={<SignUpForm />} />
//           <Route path="/passwordManager" element={<PasswordManager />} />
//           <Route path="/documentForm" element={<DocumentForm />} />
//           <Route path="/login" element={<LogInForm handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;


// src/App.tsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Footer from './components/Footer';
// import Contact from './pages/Contact';
// import SignUpForm from './pages/SignUpForm';
// import PasswordManager from './pages/PasswordManager';
// import DocumentManager from './pages/DocumentManager';
// import DocumentForm from './components/DocumentFormPage';
// import LogInForm from './pages/LogInForm';
// import { AuthProvider } from './AuthContext';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <AuthProvider>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/documentManager" element={<DocumentManager />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/signup" element={<SignUpForm />} />
//             <Route path="/passwordManager" element={<PasswordManager />} />
//             <Route path="/documentForm" element={<DocumentForm />} />
//             <Route path="/login" element={<LogInForm />} />
//           </Routes>
//           <Footer />
//         </AuthProvider>
//       </Router>
//     </div>
//   );
// }

// export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SignUpForm from './pages/SignUpForm';
import PasswordManager from './pages/PasswordManager';
import DocumentManager from './pages/DocumentManager';
import DocumentForm from './components/DocumentFormPage';
import LogInForm from './pages/LogInForm';
import { AuthProvider, useAuth } from './AuthContext';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/documentManager"
              element={<PrivateRoute><DocumentManager /></PrivateRoute>}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/passwordManager" element={<PasswordManager />} />
            <Route
              path="/documentForm"
              element={<PrivateRoute><DocumentForm /></PrivateRoute>}
            />
            <Route path="/login" element={<LogInForm />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
