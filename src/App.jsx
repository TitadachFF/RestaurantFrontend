import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel";





function App() {
  return (
  

  
    <BrowserRouter>
    
      <Navbar/>
      <Carousel/>
      <card/>
      <div className="App">
        <Routes>
     
        </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
