import React from 'react';
import TBody from "./TBody";
import THead from "./THead"
import Table from '@mui/material/Table';

function TablaPeliculas(props) {
    return (
        <Table>
            <THead cabecera={props.cabecera}/>
            <TBody filas={props.filas} onClickedMovie={props.onClickedMovie}/>
        </Table>
    );
}
export default TablaPeliculas;

