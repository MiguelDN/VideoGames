import React from "react";
import { useNavigate } from "react-router-dom";

import * as PlayerServer from "./PlayersServer";

const PlayerItem = ({ player, listPlayers }) => {
    const navigate = useNavigate();
    // console.log(props.player);
    // console.log(player);

    const handleDelete = async (playerId) => {
        await PlayerServer.deletePlayer(playerId);
        listPlayers();
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">
                    {player.first_name}
                    <button onClick={() => navigate(`/updatePlayer/${player.id}`)} className="ms-2 btn btn-sm btn-info">
                        Update
                    </button>
                </h3>
                <p className="card-text">
                    Last Name: <strong>{player.last_name}</strong>
                </p>
                <a href={player.coins} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Go to website
                </a>
                <button onClick={() => player.id && handleDelete(player.id)} className="btn btn-danger my-2">
                    Delete player
                </button>
            </div>
        </div>
    );
};

export default PlayerItem;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field: 'firstName',
//         headerName: 'First name',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'lastName',
//         headerName: 'Last name',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 110,
//         editable: true,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataGridDemo() {
//     return (
//         <Box sx={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 checkboxSelection
//                 disableSelectionOnClick
//                 experimentalFeatures={{ newEditingApi: true }}
//             />
//         </Box>
//     );
// }