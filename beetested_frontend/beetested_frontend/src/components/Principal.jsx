import { Button } from "reactstrap";
import { Grid, ListItem } from "@mui/material";
import { Box } from "@mui/system";



import React from 'react'
import { Stack } from "react-bootstrap";

const Principal = () => {
    return (
        <Grid
        >
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
                minHeight="10vh"
            
           >
            
            <Button href="/PlayerList">PLAYERS</Button>
            
            </Box>
        
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="10vh"
                >
                <Button href="/GameList">GAMES</Button>
            
        </Box>
        </Grid>

    )
}

export default Principal