import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditProfile from "./pages/EditProfile";
import Header from "./components/Header";
import Coursecontent from "./pages/Coursecontent"; 
import Settings from "./pages/Settings";   
import ForgotPassword from "./pages/ForgotPassword";


import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';



function App() {
  /** Configure amplify */
Amplify.configure(awsconfig);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/coursecontent" element={<Coursecontent />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
