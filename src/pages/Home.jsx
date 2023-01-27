import React from "react";
import TiposProductos from "../components/TiposProductos";
import Orden from "../components/Orden";
import Productos from "../components/Productos";
import "./Home.css";
import Rutas from "../components/Rutas";
import FacturaTotal from "../components/FacturaTotal";

export default function Home() {
  return (
    <div>
      <div className="container_app">
        <Orden />
        <TiposProductos />
        <Productos />
        <FacturaTotal />
      </div>
    </div>
  );
}
