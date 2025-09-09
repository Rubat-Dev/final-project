import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { MovieProvider } from "./context/MovieContext";
const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </MovieProvider>
  );
};

export default App;
