import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export default function CardEntradas() {
    const {entradas,addProduct}=useContext(DataContext);
    return (
      <div className='cards_container flex flex-wrap'>{entradas.map(entrada=>{
  
          return(
              <div key={entrada.id} className="cards" onClick={()=>addProduct(entrada.nombre,entrada.precio,entrada.descripcion)}>
                  <p>{entrada.nombre}</p>

                 
                  
              </div>
          )
      })}</div>
    )
}
