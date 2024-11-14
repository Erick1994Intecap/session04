import logo from './logo.svg';
import './App.css';
import { PruebaComponente } from './Componentes/PruebaComponente';
import Temporizador from './Componentes/Temporizador';
import ListaPelicula from './Componentes/ListaPeliculas';
import ListaPokemon from './Componentes/ListaPokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebaComponente></PruebaComponente>
        <Temporizador tiempoInicial={30}></Temporizador>
        <ListaPelicula></ListaPelicula>
        <ListaPokemon></ListaPokemon>
      </header>
    </div>
  );
}

export default App;
