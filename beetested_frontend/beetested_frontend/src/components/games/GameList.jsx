import React, { useEffect, useState } from "react";
import RenderExpandCellGrid from "../RenderExpandCellGrid";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../../index.css'




import * as GamesServer from "./GamesServer";
import { Button } from "reactstrap";
import RenderExpandCellGridGames from "../RenderExpandCellGridGames";

const PlayerList = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    const listGames = async () => {
        try {
            const res = await GamesServer.listGames();
            const data = await res.json();
            setGames(data);
            console.log('players', data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listGames();
    }, []);

    return (
        <>
            {games ? (
                <>
                    <strong>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                color='string'
                                onClick={() => navigate('/GameForm')
                                }>
                                <h3>ADD GAME</h3>
                            </Button>
                        </div>
                    </strong>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20
                    }}>
                        <RenderExpandCellGridGames />
                    </div>
                    {/* <div className="row" >
                    {
                        players.map((player) => (
                            
                            <PlayerItem key={player.id} player={player} listPlayers={listPlayers} />
                        ))
                    }
                </div > */}
                </>
            ) : (<p>loading</p>)}
        </>
    );
};

export default PlayerList;
