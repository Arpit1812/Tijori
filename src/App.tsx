import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import SignUpForm from "./pages/SignUpForm";
import PasswordManager from "./pages/PasswordManager";
import DocumentManager from "./pages/DocumentManager";
import DocumentForm from "./components/DocumentFormPage";
import LogInForm from "./pages/LogInForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {" "}
          <Route path="/" Component={Home} />
          <Route path="/documentManager" Component={DocumentManager} />
          <Route path="/contact" Component={Contact} />
          <Route path="/signup" Component={SignUpForm} />
          <Route path="/passwordManager" Component={PasswordManager} />
          <Route path="/documentForm" Component={DocumentForm} />
          <Route path="/login" Component={LogInForm} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
