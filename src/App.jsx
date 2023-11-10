import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Typography } from "@material-tailwind/react";
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
import NotAllow from "./pages/NotAllow";
import Layout from "./components/Layout";
import { SearchProvider } from "./hook/SearchContext";


function App() {
  return (
    <AuthProvider>
      <SearchProvider >
        <BrowserRouter>


          <Routes>
            <Route path="/" element={<Layout />}>

              <Route index element={<Restaurant />} />


              <Route
                path="/add" element=
                {<AdminRoute>
                  <Add />
                </AdminRoute>} />

              <Route path="/Search" element=
                {
                  <Search />
                } />


              <Route path="/NotAllow" element={<NotAllow />} />

              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="/Update/:restaurantId" element=
                {<AdminRoute><Update /></AdminRoute>} />
            </Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </AuthProvider>

  );
}

export default App;