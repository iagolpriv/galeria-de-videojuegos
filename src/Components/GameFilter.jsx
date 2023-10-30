import React from 'react';
import '../Styles.css';

function GameFilter({ games, setGames }) {  //(Props)
  const handleFilterChange = (e) => {  //Forma de filtrar
    const searchTerm = e.target.value;
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setGames(filteredGames);
  };

  return (
    <div className="game-filter">
      <input
        type="text"
        className='input-field'
        placeholder="Filtrar Videojuego"
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default GameFilter;