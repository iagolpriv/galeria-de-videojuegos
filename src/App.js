import React, { useState } from 'react';
import './Styles.css';
import GameGallery from './Components/GameGallery';
import GameForm from './Components/GameForm';
import GameFilter from './Components/GameFilter';

function App() {

  const [games, setGames] = useState([]);

  //Funcion para agregar un nuevo juego
  const addGame = (game) => {
    setGames([...games, game]);
  };

  //Funcion para eliminar un juego
  const deleteGame = (index) => {
    const updateGames = [...games];
    updateGames.splice(index, 1);
    setGames(updateGames);
  };
  
  return (
    <div className="App">
    <h1>Galería de Videojuegos</h1>
    <GameForm addGame={addGame}/>
    <GameFilter games={games} setGames={setGames}/>
    <GameGallery games={games} deleteGame={deleteGame}/>

    </div>
  );
}

export default App;