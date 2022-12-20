import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const API_URL = "http://127.0.0.1:8000/player/players/";

export const listPlayers = async () => {
    return await fetch(API_URL);
};

export const getPlayer = async (playerId) => {
    return await fetch(`${API_URL}${playerId}/`);
};

export const registerPlayer = async (newPlayer) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first_name": String(newPlayer.first_name).trim(),
            "last_name": String(newPlayer.last_name).trim(),
            "coins": parseInt(newPlayer.coins),
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

export const deletePlayer = async (playerId) => {
    return await fetch(`${API_URL}${playerId}/`, {
        method: 'DELETE'
    });
};

export const renderDetailsButton = (params) => {
    return (
        <strong>
            <a href={`/updatePlayer/${params.id}`}>
                <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                
            // onClick={() => {
            //   parseName(params.row.col5)
            // }
            // }
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
                <button onClick={() => deletePlayer(params.id)} className="btn btn-danger my-2">
                    Delete player
                </button>
            </a>


        </strong>
    )
}