import React from 'react';
import TBody from "./TBody";
import THead from "./THead"
import Table from '@mui/material/Table';

function TablaReleases(props) {
    return (
        <Table>
            <THead cabecera={props.cabecera}/>
            <TBody filas={props.filas} onClickedAlbum={props.onClickedAlbum}/>
        </Table>
    );
}
export default TablaReleases;

