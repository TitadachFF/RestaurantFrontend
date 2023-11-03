import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel";
import Restaurant from "./pages/Restaurant";
import Add from "./pages/Add";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
    Ro
      <Navbar />
     
     

      <div className="App">
        <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/add" element={<Add />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Update/:restaurantId" element={<Update />} />
        <Route path="/Signin" element={<Signin />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
