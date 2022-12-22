import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const API_URL = "http://127.0.0.1:8000/game/games/";

export const listGames = async () => {
    return await fetch(API_URL);
};

export const getGame = async (gameId) => {
    return await fetch(`${API_URL}${gameId}/`);
};

export const registerGame = async (newGame) => {
    console.log('newgame',newGame)
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "game": String(newGame.game).trim(),
            "player": String(newGame.player).trim(),
        })
    });
};


export const updatePlayer = async (playerId, updatedPlayer) => {
    return await fetch(`${API_URL}${playerId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first_name": String(updatedPlayer.first_name).trim(),
            "last_name": String(updatedPlayer.last_name).trim(),
            "coins": parseInt(updatedPlayer.coins),
        })
    });
};

export const updateGame = async (gameId, updatedGame) => {
    console.log('updatedGame.game', updatedGame.game)
    console.log('updatedGame.player', updatedGame.player)
    console.log('gameId',gameId)
    return await fetch(`${API_URL}${gameId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "game": String(updatedGame.game).trim(),
            "player": String(updatedGame.player).trim(),
        })
    });
};

export const deleteGame = async (gameId) => {
    return await fetch(`${API_URL}${gameId}/`, {
        method: 'DELETE'
    });
};

export const renderDetailsButton = (params) => {
    return (
        <strong>
            <a href={`/updateGame/${params.id}`} >
                <Button 
                >
                    Update
                </Button>
            </a>


        </strong>
    )
}


export const renderDeleteButton = (params) => {
    return (
        <strong>
            <a href='/'>
                <Button onClick={() => deleteGame(params.id)}  color="error">
                    Delete
                </Button>
            </a>


        </strong>
    )
}