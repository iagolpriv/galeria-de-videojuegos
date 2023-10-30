import React from 'react';

function Game({game, index, deleteGame}) { //(Props)
    return (
        <div className="game">
        <img src={game.image} alt={game.title}/>
        <h2>{game.title}</h2>
        <button onClick={() => deleteGame(index)}>X</button>
        </div>
    )
};

export default Game;