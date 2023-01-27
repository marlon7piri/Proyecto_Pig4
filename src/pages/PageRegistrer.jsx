import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

export default function PageRegistrer() {
  const { user, setUser } = useContext(DataContext);



  const handlerSubmit = (e) => {
    e.preventDefault();
   
    localStorage.setItem("user", user);

  };

  return (
    <div className="login_container flex justify-center items-center">
      PageRegistrer
      <div className="bg-gray-200 w-[700px] h-[500px] flex justify-start items-end ">
        <div className="calculadora_container w-max h-[60%] bg-gray-400 p-2">
          <div className="calculadora bg-gray-200 w-max h-full grid grid-cols-3"></div>
        </div>
        <form>
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            maxLength={10}
          />
          <Link   to="/ordenar"  onClick={(e)=>handlerSubmit(e)}  >
            Aceptar
          </Link>
        </form>
      </div>
    </div>
  );
}
