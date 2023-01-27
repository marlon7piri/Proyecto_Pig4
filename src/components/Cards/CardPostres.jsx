import React, { useContext } from 'react'
import { DataContext } from '../DataProvider';

export default function CardPostres() {

  const {postres,addProduct}=useContext(DataContext);
    return (
      <div className='cards_container flex gap-4 '>{postres.map(postre=>{
  
          return(
              <div key={postre.id} className="cards"   onClick={()=>addProduct(postre.nombre,postre.precio,postre.descripcion)}>
                  <p>{postre.nombre}</p>

                
                  
              </div>
          )
      })}</div>
    )
}
