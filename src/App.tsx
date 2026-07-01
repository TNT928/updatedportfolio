import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  HashRouter,
} from "react-router-dom";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Services from "./Pages/services";
import Photography from "./Pages/photography";


function App() {
  return (
    <HashRouter>
      {" "}
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='photography' element={<Photography/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='services' element={<Services/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
