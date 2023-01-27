import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import PageRegistrer from "../pages/PageRegistrer";

export default function Rutas() {
  return (
    <Routes>
      <Route  exact path="/ordenar" element={<Home />} />
     
      <Route exact path="*" element={<NotFound />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
