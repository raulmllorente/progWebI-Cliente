import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TBody(props) {
    const filas = props.filas.map((fila, i) => {
        return (
            <TableRow key={i} onClick={() => {props.onClickedMovie(fila.imdbID)}}>
                <TableCell>{fila.Title}</TableCell>
                <TableCell>{fila.Year}</TableCell>
                <TableCell><img width={128} src={fila.Poster} alt=''/></TableCell>
            </TableRow>
        );
    });
    return(
        <TableBody id="table_body">
            {filas}
        </TableBody>
    );
} export default TBody;
