import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Typography } from "@material-tailwind/react";
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
import Footer from "./components/Footer/Footer";
import CarouselCustomArrows from "./components/Carousel/Carousel";
import NavBarCate from "./components/Navbar/Navbar.category";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import AdminRoute from "./pages/AdminRoute";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      
      <BrowserRouter>


      
        <div className=" bg-gray-100">
          <Navbar />

          <div className="App">
            <Routes>
              <Route path="/" element={<Restaurant />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Update/:restaurantId" element={<Update />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="Signup" element={<Signup />} />
   
            </Routes>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
