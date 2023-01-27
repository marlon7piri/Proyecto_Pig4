import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider";




export default function CardMesas() {
const {mesas,}=useContext(DataContext)

  return (
   
    <div className=" w-full h-full grid grid-cols-6 gap-6 ">
     
      {mesas.map((mesa) => {
        return (
        <Link to="/ordenar"  key={mesa.id} onClick={()=>console.log(mesa.id)}>
          <div className="w-max h-max p-2 m-2 rounded-full flex flex-wrap justify-center hover:opacity-75 hover:cursor-pointer transition-all duration-300">
            <p className="w-max h-max rounded-full p-2">{mesa.numero}</p>
            <img src={mesa.imagen} alt={mesa.numero} className="w-[50px] h-[50px] object-cover"/>
          </div>
          </Link>
      
        );
      })}




    
    </div>


  );
}
