import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export default function CardPrincipales() {

const {principales,addProduct}=  useContext(DataContext)
return (
  <div className=' cards_container flex flex-wrap'>{principales.map(principale=>{

      return(
          <div key={principale.id} className="cards" onClick={()=>addProduct(principale.nombre,principale.precio,principale.descripcion)}>
              <p>{principale.nombre}</p>

             
              
          </div>
      )
  })}</div>
)
}
