import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CardFactura from './Cards/CardFactura'

import CardOrden from './Cards/CardOrden'
import { DataContext } from './DataProvider'


export default function FacturaTotal() {

 
  const {total,impuestos,showfactura,mostrarFactura, setShowbuttons}=useContext(DataContext)


 

  const Total = (total + impuestos)

  const show1=showfactura? "container_factura show_factura":" container_factura";
  return (
    <div>

<div className={show1}>
<div className='factura w-[400px] h-auto bg-gray-200  p-2 absolute'>
<div className='flex justify-between mb-10'><h2 className='text-gray-900 text-3xl text-center font-black '>Factura</h2>
<button onClick={()=>{mostrarFactura(),setShowbuttons(true)}} className=" w-max  bg-red-700 text-white font-medium p-2 rounded-md hover:bg-red-400   "><AiOutlineClose className='text-2xl font-black text-white ' /></button></div>
<CardFactura/>

<div className='flex flex-col justify-center items-center'>
  {<h3>SubTotal: ${total.toFixed(2)}</h3>}
  {<h3>Impuestos: ${impuestos.toFixed(2)}</h3> }
<h3 className='text-center text-black font-black'>Total: 
<span className='text-2xl text-gray-900 font-black ml-2'>${Total.toFixed(2)}</span>
</h3>
</div>
</div>


</div>


    </div>
  )
}
