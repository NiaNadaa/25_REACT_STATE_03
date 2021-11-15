
import './App.css';
import lista from "./lista"

function App() {

function Coches (props){
  return(
    <>
    <h3>Modelo: Ford Focus</h3>
    <p>Ruedas: {props.coche.ruedas}</p>
    <p>Altura: {props.coche.altura}</p>
    <p>Longitud: {props.coche.longitud}</p>
    <p>Color: {props.coche.color}</p>
    </>
  )
}

  return (
    <>
    <Coches coche={lista[0]}/>
    <Coches coche={lista[1]}/>
    <Coches coche={lista[2]}/>
    <Coches coche={lista[3]}/>
    </>
  );
}

export default App;
