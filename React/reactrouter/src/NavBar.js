import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//https://mui.com/components/

function NavBar(props) {

    return (
        // <nav style={{
        //     borderBottom: "solid 1px",
        //     paddingBottom: "1rem"
        //   }}>
        //   <Link to="/musica">Musica</Link> |{" "}
        //   <Link to="/cine">Cine</Link> |{" "}
        //   <Link to="/about">About</Link>
        // </nav>

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/musica">Musica</Link> |{" "}
                <Link to="/cine">Cine</Link> |{" "}
                <Link to="/about">About</Link>
            </Typography>
            
        </Toolbar>
        </AppBar>
        </Box>
    );
}
export default NavBar;