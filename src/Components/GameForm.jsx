import React, { useState } from 'react';
import '../Styles.css';

function GameForm({ addGame }) { //Forma del juego y añadir juego (props)
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleAddGame = () => { //Que procesos para agregar juego
    if (title && image) {
      addGame({ title, image });
      setTitle('');
      setImage('');
    }
  };

  return (
    <div className="game-form">
      <input
        type="text"
        placeholder="Nombre Videojuego"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='input-field'
      />
      <input
        type="text"
        className='input-field'
        placeholder="URL Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        className='button'
        onClick={handleAddGame}
      >
        Añadir Juego
      </button>
    </div>
  );
}

export default GameForm;