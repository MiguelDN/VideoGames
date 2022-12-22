import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as PlayersServer from "./Players/PlayersServer";
import { useEffect } from 'react';

export default function SelectSmall() {
    const [player, setPlayer] = React.useState('');
    const [players, setPlayers] = React.useState('');

    useEffect(() => {
      listPlayers()
    }, [])
    

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

    const handleChange = (event) => {
        setPlayer(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={player}
                label="player"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                
                <MenuItem value={10}>Ten</MenuItem>
            </Select>
        </FormControl>
    );
}
