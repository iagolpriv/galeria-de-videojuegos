import React from 'react';
import Game from './Game';

function GameGallery({games, deleteGame}) { //(Props)
        return (
        <div className="game-gallery">
        {games.map((game, index) => (
            <Game key={index} game={game} index={index} deleteGame={deleteGame}/>

        ))}
        </div>
    );
}

export default GameGallery;