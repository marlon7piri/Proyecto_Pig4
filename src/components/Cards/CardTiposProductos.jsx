import React, { useContext } from "react";

import { DataContext } from "../DataProvider";
export default function CardTiposProductos() {
 
const {showjugos,setJugos,showcocteles,setCocteles,showenergizantes,setEnergizantes,showentradas,setEntradas,showpostres,setPostres,showprincipales,setPrincipales } = useContext(DataContext)




  return (
    <div>
     
      <div className="flex flex-wrap gap-4 " >
        <button className="boton boton_jugos" onClick={()=>{setJugos(!showjugos)
        setEnergizantes(false) ;setCocteles(false);setEntradas(false);setPrincipales(false);setPostres(false)}}>Jugos</button>
        <button className="boton boton_energizante" 
        onClick={()=>{
          setEnergizantes(!showenergizantes);
          setJugos(false)
          setCocteles(false);setEntradas(false);setPrincipales(false) ;setPostres(false)}}>
            Energizantes</button>
        <button className="boton boton_cocteles" onClick={()=>{setCocteles(!showcocteles) ; setEnergizantes(false);
          setJugos(false);setEntradas(false);setPrincipales(false) ;setPostres(false)}}>Cocteles</button>
        <button className="boton boton_entradas" onClick={()=>{setEntradas(!showentradas) ; setEnergizantes(false);
          setJugos(false);
          setCocteles(false);setPrincipales(false);setPostres(false) }}>Entradas</button>
        <button className="boton boton_principales"  onClick={()=>{setPrincipales(!showprincipales) ; setEnergizantes(false);
          setJugos(false);setEntradas(false);setCocteles(false);setPostres(false)}}>Principales</button>
        <button className="boton boton_postres" onClick={()=>{setPostres(!showpostres);setJugos(false); setEnergizantes(false);setPrincipales(false);setEntradas(false);  setCocteles(false)}}>Postres</button>
      </div>
    </div>
  );
}
