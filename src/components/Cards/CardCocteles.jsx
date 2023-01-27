import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export default function CardCocteles() {
    const {cocteles,addProduct}=useContext(DataContext);
    return (
      <div className='flex g flex-wrap'>{cocteles.map(coctel=>{
  
          return(
              <div key={coctel.id} className=" cards  " onClick={()=>addProduct(coctel.nombre,coctel.precio,coctel.descripcion)}>
                  <p>{coctel.nombre}</p>

                 
                  
              </div>
          )
      })}</div>
    )
}
