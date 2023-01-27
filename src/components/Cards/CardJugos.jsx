import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export default function CardJugos() {

 const {jugos,addProduct}= useContext(DataContext)
  return (
 <div className='cards_container flex flex-wrap'>{
    jugos.map(jugo=>{

      return(<div key={jugo.id} className="cards" onClick={()=>addProduct(jugo.nombreJugos,jugo.precio,jugo.descripcion)}>
    

        <p>{jugo.nombreJugos}</p>
      </div>)
    }) 
    
    
  }</div>
  )
}
