import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
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
import Privacy from "./Pages/privacy";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "VanderLoon Media | Video Production & Photography in South Florida",
    description: "Fort Lauderdale photography and video production for businesses, events, brands, and individuals throughout South Florida. Explore our work and services.",
  },
  "/about": {
    title: "About VanderLoon Media | South Florida Video Production",
    description: "Meet Michael VanderLoon and learn how VanderLoon Media approaches photography, video production, and visual storytelling across South Florida.",
  },
  "/services": {
    title: "Video Production & Photography Services | VanderLoon Media",
    description: "Explore photography and video production services for businesses, brands, events, products, properties, and people throughout South Florida.",
  },
  "/projects": {
    title: "Video Production Portfolio | VanderLoon Media",
    description: "Watch promotional, event, and storytelling videos created by VanderLoon Media for businesses and organizations across South Florida.",
  },
  "/photography": {
    title: "Photography Portfolio | VanderLoon Media",
    description: "Explore VanderLoon Media photography featuring portraits, automotive, real estate, food, hospitality, lifestyle, and commercial work.",
  },
  "/contact": {
    title: "Contact VanderLoon Media | Start Your Project",
    description: "Tell VanderLoon Media about your photography or video project in Fort Lauderdale or South Florida and request a personalized quote.",
  },
  "/privacy": {
    title: "Privacy Policy | VanderLoon Media",
    description: "Learn how VanderLoon Media handles website inquiries, analytics data, and visitor privacy.",
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

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouteMetadata />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='photography' element={<Photography/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='privacy' element={<Privacy/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
