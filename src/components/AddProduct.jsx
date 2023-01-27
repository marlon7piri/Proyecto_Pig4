import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from './DataProvider'

export default function AddProduct() {

 const{AddNewProduct,  newProduct, setNewProduct
  ,newPrecio, setNewPrecio,
  seleccion, setSeleccion}= useContext(DataContext)




const closeForm=()=>{

  document
  .querySelector(".form_add_product")
  .classList.toggle("show_form_add_product");

}


  return (
    <div className='form_add_product absolute bg-gray-800 top-0 left-0 w-[300px] h-[100vh] flex justify-center items-center z-50'>


      <button className='
      absolute bg-red-700 top-2 right-2 p-4 rounded-md text-gray-50 font-bold hover:bg-red-900 transition-colors duration-500' onClick={()=>closeForm()}>X</button>
      <div className='flex justify-center bg-slate-50 text-center  p-4'> <form className='flex flex-col justify-center bg-slate-50 text-center '><h3 className='text-gray-900 font-bold text-2xl mb-10'>Agregar producto</h3>
     

      <div className='flex flex-col gap-4'><div className='flex'><label className='font-black mr-2' >Category:</label>
      <select className=' cursor-pointer p-2 outline-none bg-gray-200 w-max'  value={seleccion}onChange={(e)=>{setSeleccion(e.target.value)}}>
        <option value="">
        </option>
        <option value="Jugos">Jugos
        </option>
      <option value="Energizantes">Energizantes
      </option>
      <option value="Cocteles">Cocteles</option>
      <option value="Entradas">Entradas</option>
      <option value="Principales">Principales</option>
      <option value="Postres">Postres</option>
      </select></div>

      <div className='flex flex-col gap-10'>
        
        <div>
        <label className='font-black mr-2'>Nombre:</label><input type="text" className='p-2 outline-none bg-gray-200' placeholder='name_product' onChange={(e)=>{setNewProduct(e.target.value)}}  value={newProduct}/>
        </div>
      <div>
        <label className='font-black mr-2'>Precio:
          </label><input type="number" className='p-2 outline-none bg-gray-200' placeholder='price_product' onChange={(e)=>{setNewPrecio(e.target.value)}}  value={newPrecio}/>
          </div>
          </div>
      
      <button onClick={(e)=>{AddNewProduct({e,newPrecio,newProduct,seleccion})}} className="w-max m-auto bg-red-700 top-2 right-2 px-10 py-2 rounded-md text-gray-50 font-bold hover:bg-red-900 transition-colors duration-500">Add</button></div>
      </form></div></div>
      
     
  )
}
