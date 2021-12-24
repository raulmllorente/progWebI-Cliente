import React from 'react';
import Grid from '@mui/material/Grid';
//https://mui.com/components/grid/

function FichaRelease(props) { 

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <h1>{props.datos.title}</h1>
            </Grid>
            <Grid item xs={4}>
                <h2>Fecha lanzamiento: {props.datos['first-release-date']}</h2>                
            </Grid>
            <Grid item xs={12}>
                <img height="100px" src={props.poster} alt={props.datos.id}/>
            </Grid>
        </Grid>
    );
}



export default FichaRelease;

