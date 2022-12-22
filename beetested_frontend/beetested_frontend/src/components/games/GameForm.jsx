import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as GamesServer from "./GamesServer";

const GameForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    // console.log(params);

    const initialState = { id: 0, first_name: "", last_name: "", coins: "" };

    const [game, setGame] = useState("");

    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setGame({ ...game, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await GamesServer.registerGame(game);
                const data = await res.json();
                if (data.message === "Success") {
                    setGame(initialState);
                }
            } else {
                console.log('handleSubmit game',game)
                await GamesServer.updateGame(params.id, game);
            }
            navigate("/GameList");
        } catch (error) {
            console.log(error);
        }
    };


    const getGame = async (gameId) => {
        try {
            console.log('estoy en getPlayer PlayerForm')
            const res = await GamesServer.getGame(gameId);
            console.log('res', res)
            const data = await res.json();
            console.log('estoy en getPlayer PlayerForm data', data)
            const { game, player, playerName} = data;
            console.log('data.first_name', playerName)
            console.log('data.playerID', data.player)
            setGame({ game, player, playerName });
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        if (params.id) {
            getGame(params.id);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Game</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Game</label>
                    <input type="text" name="game" value={game.game} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    {params.id ? (
                        <>
                        <label className="form-label">Player: {game.playerName}</label>
                    <input type="hidden" name="player" value={game.player} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
                        </>
                    ) : (
                            <>
                                <label className="form-label">Player</label>
                                <input type="text" name="player" value={game.player} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
                            </>
                    )}
                    
                </div>
                
                <div className="d-grid gap-2">
                    {params.id ? (
                        <button type="submit" className="btn btn-block btn-primary">
                            Update
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-block btn-success">
                            Register
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default GameForm;
