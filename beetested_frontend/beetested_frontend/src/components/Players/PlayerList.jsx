import React, { useEffect, useState } from "react";
import RenderExpandCellGrid from "../RenderExpandCellGrid";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../../index.css'


// Components:
import PlayerItem from "./PlayerItem";

import * as PlayersServer from "./PlayersServer";
import { Button } from "reactstrap";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    const listPlayers = async () => {
        try {
            const res = await PlayersServer.listPlayers();
            const data = await res.json();
            setPlayers(data);
            console.log('players', data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listPlayers();
    }, []);

    return (
        <>
        
        
            {players ? (
                <>
                    <div style={{
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>
                        <Button onClick={() => navigate('/PlayerForm')}
                            style={{
                                color: 'black',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'green'
                            }}
                        >Add player</Button>
                        
                        
                       
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:20
                }}>
                    <RenderExpandCellGrid />
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
