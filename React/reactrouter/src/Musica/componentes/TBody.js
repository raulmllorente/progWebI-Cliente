import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TBody(props) {
    const filas = props.filas.map((fila, i) => {
        return (
            <TableRow key={i} onClick={() => {props.onClickedAlbum(fila.id)}}>
                <TableCell>{fila.title}</TableCell>
                <TableCell>{fila['artist-credit'][0].artist.name}</TableCell>
                <TableCell>{fila['primary-type']}</TableCell>
            </TableRow>
        );
    });
    return(
        <TableBody id="table_body">
            {filas}
        </TableBody>
    );
} export default TBody;
