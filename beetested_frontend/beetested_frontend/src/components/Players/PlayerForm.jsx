import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as PlayerServer from "./PlayersServer";

const PlayerForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    // console.log(params);

    const initialState = { id: 0, first_name: "", last_name: "", coins: "" };

    const [player, setPlayer] = useState("");

    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await PlayerServer.registerPlayer(player);
                const data = await res.json();
                if (data.message === "Success") {
                    setPlayer(initialState);
                }
            } else {
                await PlayerServer.updatePlayer(params.id, player);
            }
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };


    const getPlayer = async (playerId) => {
        try {
            console.log('estoy en getPlayer PlayerForm')
            const res = await PlayerServer.getPlayer(playerId);
            console.log('res',res)
            const data = await res.json();
            console.log('estoy en getPlayer PlayerForm data',data)
            const { first_name, last_name, coins } = data;
            console.log('data.first_name', data.last_name)
            setPlayer({ first_name, last_name, coins });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getPlayer(params.id);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Player</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="first_name" value={player.first_name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="last_name" value={player.last_name} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Coins</label>
                    <input type="number" name="coins" value={player.coins} onChange={handleInputChange} className="form-control" maxLength="100" required />
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

export default PlayerForm;
