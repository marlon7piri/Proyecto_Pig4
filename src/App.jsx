import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./components/DataProvider";
import Rutas from "./components/Rutas";
import Home from "./pages/Home";
import PageRegistrer from "./pages/PageRegistrer";


function App() {
  return (
    <div className="App">
     
        <DataProvider>
         <Rutas/>
        </DataProvider>
     
    </div>
  );
}

export default App;
