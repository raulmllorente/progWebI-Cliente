import React from "react";

function TBody(props){
    const datos = props.datos.map((fila, i) => {
        return (
            <tr key={i}>
                <td>{fila.albumId}</td>
                <td>{fila.id}</td>
                <td>{fila.title}</td>
                <td><img src={fila.thumbnailUrl} alt={fila.id} /></td>
            </tr>
        );
    }
    
    );

    return(
        <tbody id="table_body">
            {datos}
        </tbody>
    );

}

export default TBody;