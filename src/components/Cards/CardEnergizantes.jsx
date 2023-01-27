import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export default function CardEnergizantes() {
    const {energizantes,addProduct,orden,setOrden,}=useContext(DataContext);



    return (
      <div className='cards_container flex gap-4 ' >{energizantes.map(energizante=>{
  
          return(
              <div key={energizante.id} className=" cards " onClick={()=>addProduct(energizante.nombre,energizante.precio,energizante.descripcion)}>
                  <p>{energizante.nombre}</p> 

                
                  
              </div>
         
          )
      })}</div>
      )

}
