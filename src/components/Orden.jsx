import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/DataProvider";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import CardOrden from "./Cards/CardOrden";
import AddProduct from "./AddProduct";

export default function Orden() {
 
  const { setOrden, showForm, setShowForm, addComent, total  ,descripcion, setDescripcion,id,} =
    useContext(DataContext);


  const deleteProduct = () => {
  
      setOrden([]);
   
  };
  const show1 = showForm ? "form show" : "form";
  const show2 = showForm ? "form_container show" : "form_container";


  const newTotal =total.toFixed(2)
  return (
    <div className="orden bg-gray-300  w-full h-[300px] z-10 ">
      <div className="flex justify-between gap-4 p-2">
        
        <h2 className="texto_orden text-center text-2xl text-gray-700 font-bold">Orden</h2>{" "}
        <button
          className="boton_orden_borrarAll bg-red-600 px-2 rounded-md text-white font-bold hover:bg-red-500"
          onClick={() => deleteProduct()}
        >
          <MdDeleteForever className="" />
        </button>
      </div>
      <CardOrden />
      <p className="text-center text-black font-black">
        Total: <span className="text-[20px] text-black">${newTotal}</span>
      </p>

      <div className={show2}>
        <form className={show1} onSubmit={(e) => e.preventDefault()}>
          <h4 className="text-gray-900 w-max absolute top-2">
            Agregar comentario al producto
          </h4>
          <input
            type="text"
            onChange={(e) => setDescripcion(e.target.value)} value={descripcion}
            className="outline-none px-3 py-1 rounded-md focus:bg-gray-300"
          />
          <button
            className="bg-white px-4 py-1 hover:bg-red-500
            hover:text-white transition-colors duration-500 mt-2 rounded-md font-black text-gray-600"
            onClick={() => {
              addComent(id,descripcion);
            }}
          >
            Add
          </button>
        </form>
        <AiOutlineClose
          className="bg-white text-gray-600 text-2xl w-max h-max p-2 rounded-md font-black hover:cursor-pointer absolute top-10 right-10 hover:bg-red-500 transition-colors duration-500 hover:text-white"
          onClick={() => setShowForm(false)}
        />
      </div>

      <div className="absolute top-0 left-0 w-screen"><AddProduct/></div>
    </div>
  );
}
