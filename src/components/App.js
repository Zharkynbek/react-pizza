import React from "react";
import Navbar from "../components/Nav/Navbar";
import Home from "./Home/Home";
import Pizzas from "./Pizzas/Pizzas";
import Döner from "./Döner/Döner";
import Salate from "./Salate/Salate";
import Getränke from "./Getränke/Getränke";
import Kontakt from "./Kontakt/Kontakt";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <div>
    //   <Navbar />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pizza" element={<Pizzas />} />
        <Route path="/doener" element={<Döner />} />
        <Route path="/salate" element={<Salate />} />
        <Route path="/getraenke" element={<Getränke />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
