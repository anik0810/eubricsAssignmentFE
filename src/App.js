
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Banner } from "./components/Landing/Banner";
import { NavBar } from "./components/Landing/LandingNavbar";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar } from "react-bootstrap";
import { Fragment } from "react";
import Landing from "./components/Landing/Landing";
import Sports from "./components/sports/Sports";
import Health from "./components/Health/Health";
import Study from "./components/Study/Study";
import Coding from "./components/Coding/Coding";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={(localStorage.getItem('isLoggedIn')==='true')?<Navigate to='/home' />:<Navigate to='/landing' />} />
          <Route path='landing' element={<Landing />} />
          <Route path='home' element={<SideBar />}>
            <Route path="/home" element={<Navigate to='health' />} />
            <Route path="sports" element={<Sports />} />
            <Route path="health" element={<Health />} />
            <Route path="study" element={<Study />} />
            <Route path="coding" element={<Coding />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
