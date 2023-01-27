import { createContext, useEffect, useState } from "react";
import {
  jugos,
  energizantes,
  entradas,
  cocteles,
  principales,
  postres,
} from "../components/data/data";
import { v4 as uuid } from "uuid";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [orden, setOrden] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showjugos, setJugos] = useState(false);
  const [showpostres, setPostres] = useState(false);
  const [showentradas, setEntradas] = useState(false);
  const [showenergizantes, setEnergizantes] = useState(false);
  const [showcocteles, setCocteles] = useState(false);
  const [showprincipales, setPrincipales] = useState(false);
  const [showfactura, setShowfactura] = useState(false);
  const [showbuttons, setShowbuttons] = useState(true);
  const [total, setTotal] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [id, setId] = useState("");
const [newProduct, setNewProduct] = useState("")
const [newPrecio, setNewPrecio] = useState(0)
const [seleccion, setSeleccion] = useState("")

  const getImpuestos = () => {
    let IVA = total * 0.07;

    setImpuestos(IVA);
  };
  useEffect(() => {
    getImpuestos();
  }, [total]);

  const addProduct = (nombre, precio, descripcion) => {
    setOrden([
      ...orden,
      {
        id: uuid(),
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
      },
    ]);
  };
  useEffect(() => {
    const getTotal = () => {
      let res = orden.reduce((prev, item) => {
        return prev + item.precio;
      }, 0.0);

      setTotal(res);
    };
    getTotal();
  }, [orden]);

  const deleteProduct = (id) => {
    const change = orden.filter((e) => e.id != id);
    setOrden(change);
  };

  const mostrarFactura = () => {
    setShowfactura(!showfactura);
  };

  //funcion para guardar id y descripcion para editar el producto
  const ShowForm = (e) => {
    setShowForm(!showForm);
    setId(e.id);
    setDescripcion(e.descripcion);
  };

  const addComent = (id, descripcion) => {
    const productFound = orden.map((product) =>
      product.id == id
        ? {
            id: product.id,
            nombre: product.nombre,
            descripcion: "#" + descripcion,
            precio: product.precio,
          }
        : product
    );

    setOrden(productFound);
    setShowForm(!showForm);
  };

  const AddNewProduct = ({ e, newPrecio, newProduct, seleccion }) => {
    e.preventDefault();
    let newprecio = parseFloat(newPrecio);

    const cleanfield=()=>{

      setNewPrecio("")
      setNewProduct("")
      setSeleccion("")
    }
   
    switch (seleccion) {
      case "Jugos":
        jugos.push({ id: uuid(),nombreJugos: newProduct,precio: newprecio, descripcion:"" });
      
        break;
      case "Energizantes":
        energizantes.push({
          id: uuid(), nombre: newProduct, precio: newprecio,descripcion:""
        });
        break;
      case "Cocteles":
        cocteles.push({ id: uuid(), nombre: newProduct, precio: newprecio,descripcion:"" });
        break;
      case "Entradas":
        entradas.push({ id: uuid(), nombre: newProduct, precio: newprecio,descripcion:"" });
        break;
      case "Principales":
        principales.push({ id: uuid(), nombre: newProduct, precio: newprecio,descripcion:"" });
        break;
      case "Postres":
        postres.push({ id: uuid(), nombre: newProduct, precio: newprecio,descripcion:"" });
        break;

      default:
        alert("Producto no encontrado");
    }
    cleanfield()
    document
      .querySelector(".form_add_product")
      .classList.toggle("show_form_add_product");
    alert("Producto agregado");
  };

  return (
    <DataContext.Provider
      value={{
        orden,
        setOrden,
        addProduct,
        deleteProduct,
        ShowForm,
        setShowForm,
        showForm,
        jugos,
        energizantes,
        entradas,
        cocteles,
        principales,
        postres,
        jugos,
        setJugos,
        showcocteles,
        setCocteles,
        showenergizantes,
        setEnergizantes,
        showentradas,
        setEntradas,
        showpostres,
        setPostres,
        showjugos,
        setJugos,
        showprincipales,
        setPrincipales,
        total,

        impuestos,
        showfactura,
        setShowfactura,
        mostrarFactura,
        showbuttons,
        setShowbuttons,
        addComent,
        descripcion,
        setDescripcion,
        id,
        setId,
        AddNewProduct,
       newProduct, setNewProduct
,newPrecio, setNewPrecio,
seleccion, setSeleccion
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
