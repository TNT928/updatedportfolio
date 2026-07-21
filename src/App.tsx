import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Services from "./Pages/services";
import Photography from "./Pages/photography";


function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
