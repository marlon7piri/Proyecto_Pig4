import React, { useContext } from "react";
import { DataContext } from "../DataProvider";
import { AiFillDelete } from "react-icons/ai";
import { SlBookOpen } from "react-icons/sl";

export default function CardOrden() {
  const {
    orden,
   
    deleteProduct,
    ShowForm,
   
    showbuttons,
   
    
  } = useContext(DataContext);

  if (orden == 0) {
    return (
      <h2 className="text-center text-2xl text-gray-900 font-semibold">
        No hay productos
      </h2>
    );
  }

  

  return (
    <div className="">
      {orden.map((e) => {
        return (
          <div key={e.id}>
            <div className="card_orden w-full flex justify-between mt-2 p-1 text-[14px]">
              <div className="w-full flex">
                <div className="flex flex-col">
                  <div>{e.nombre}</div>
                <div>{e.descripcion}</div>
                </div>
                <div className="text-gray-900 font-black">: ${e.precio}</div>
                
              </div>

              {showbuttons ? (
                <div className="boton_container_edit_delete    flex gap-4 justify-center items-center">
                  <button
                    className="boton_orden flex justify-center items-center bg-red-600 p-1 rounded-md text-white "
                    onClick={() => {
                      ShowForm(e);
                      
                    }}
                  >
                    <SlBookOpen />
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(e.id);
                    }}
                    className="boton_orden bg-red-600 p-1 rounded-md text-white "
                  >
                    <AiFillDelete />
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}
