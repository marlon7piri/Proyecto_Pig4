import React, { useContext } from "react";
import CardCocteles from "./Cards/CardCocteles";
import CardEnergizantes from "./Cards/CardEnergizantes";
import CardEntradas from "./Cards/CardEntradas";
import CardJugos from "./Cards/CardJugos";
import CardPostres from "./Cards/CardPostres";
import CardPrincipales from "./Cards/CardPrincipales";
import { DataContext } from "./DataProvider";
import { GiNotebook } from 'react-icons/gi'
import { RiAddFill } from 'react-icons/ri'

export default function Productos() {
  const { showjugos,showcocteles,showenergizantes,showentradas,showpostres,showprincipales, mostrarFactura,showbuttons, setShowbuttons} = useContext(DataContext);
  return (
    <div className="productos_container w-full h-full bg-gray-900 relative overflow-scroll flex">
      <div className=" productos flex bg-gray-300 w-[80%] ">

       
     
        {showenergizantes ? <CardEnergizantes /> : ""}
        {showentradas ? <CardEntradas /> : ""}
        {showcocteles ? <CardCocteles /> : ""}
        {showjugos ? <CardJugos /> : ""}
        {showprincipales ? <CardPrincipales />: ""}
        {showpostres ?<CardPostres />: ""}
        
      </div>

      <div className="container_boton_funciones bg-gray-900  w-[20%] h-full p-4 flex flex-col justify-self-start items-end gap-2 ">
        <button className="boton_funciones w-[10.5rem]  bg-white text-black font-medium p-2 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-white flex gap-2" onClick={()=>{mostrarFactura(),setShowbuttons(!showbuttons)}}><GiNotebook className=" icono_factura text-2xl"/>Factura</button>
        <button className="boton_funciones w-[10.5rem]   bg-white text-black font-medium p-2 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-white flex gap-2" onClick={()=>document.querySelector(".form_add_product").classList.toggle("show_form_add_product")}><RiAddFill className=" icono_factura text-2xl"/>Crear Producto</button></div>
    </div>
  );
}
