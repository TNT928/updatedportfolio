import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Services from "./Pages/services";
import Photography from "./Pages/photography";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "VanderLoon Media | Video Production & Photography in South Florida",
    description: "VanderLoon Media creates professional video production, photography, editing, and motion graphics for businesses and brands throughout South Florida.",
  },
  "/about": {
    title: "About VanderLoon Media | South Florida Video Production",
    description: "Learn about VanderLoon Media and our approach to professional video production, photography, editing, and visual storytelling.",
  },
  "/services": {
    title: "Video Production & Photography Services | VanderLoon Media",
    description: "Professional video production, photography, editing, and motion graphics for South Florida businesses, events, real estate, restaurants, and automotive brands.",
  },
  "/projects": {
    title: "Video Production Portfolio | VanderLoon Media",
    description: "Explore video production projects from VanderLoon Media, created for brands, businesses, and visual storytelling.",
  },
  "/photography": {
    title: "Photography Portfolio | VanderLoon Media",
    description: "View photography by VanderLoon Media, including commercial, automotive, real estate, and lifestyle visuals.",
  },
  "/contact": {
    title: "Contact VanderLoon Media | Start Your Project",
    description: "Contact VanderLoon Media to discuss professional video production, photography, editing, or motion graphics for your South Florida project.",
  },
};

const RouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] || pageMetadata["/"];
    document.title = metadata.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", metadata.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", `https://www.vanderloonmedia.com${location.pathname}`);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouteMetadata />
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
