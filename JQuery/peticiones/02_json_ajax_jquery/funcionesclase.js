//Construir peticion AJAX usando jQuery

$(function () {
    $.ajax("https://jsonplaceholder.typicode.com/photos", {
        dataType: 'json',
        success: function (data) {
            data.forEach((foto) => {
                $("#table_body").append("<tr><td>" + foto.albumId + "</td><td>" +
                foto.id + "</td><td>" + foto.title + "</td><td><img src=" + 
                foto.thumbnailUrl + " alt=" + foto.id + "></td>");
                console.log(foto);
            });
            
        }
        ,
        error: function (jqXHR, texStatus, error) {
            alert("Error:" + texStatus + " " + error);
        }
    }

    );

});

//Construir peticion AJAX
// const request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/photos');
// request.send();

// request.onreadystatechange = (e) => {
//     if (request.readyState === 4) {
//         const fotos = JSON.parse(request.responseText);
//         //console.log(fotos);

//         fotos.forEach((foto) => {
//             const filaNueva = document.createElement('tr');

//             const celdaAlbumId = document.createElement('td');
//             const celdaId = document.createElement('td');
//             const celdaTitulo = document.createElement('td');
//             const celdaImagen = document.createElement('td');

//             celdaAlbumId.innerText = foto.albumId;
//             celdaId.innerText = foto.id;
//             celdaTitulo.innerText = foto.title;

//             const imgThumbnail = document.createElement('img');
//             imgThumbnail.src = foto.thumbnailUrl;
//             imgThumbnail.alt = foto.id;

//             celdaImagen.appendChild(imgThumbnail);
//             filaNueva.appendChild(celdaAlbumId);
//             filaNueva.appendChild(celdaId);
//             filaNueva.appendChild(celdaTitulo);
//             filaNueva.appendChild(celdaImagen);
//             document.getElementById("table_body").appendChild(filaNueva);

            
//         });
//     }
// }