const key = 'ce8f524a';

function detallePelicula(omdbID){
    const request= new XMLHttpRequest();
    request.open('GET', 'http://www.omdbapi.com/?apikey=' + key + '&i=' + omdbID);
    request.send();

    request.onreadystatechange = (e) => {
        if(request.readyState === 4){
            $("#ficha").show();

            const pelicula = JSON.parse(request.responseText);
            $("#peliTitulo").text(pelicula.Title);
            $("#puntuacion").text(pelicula.Ratings[0].Value);
            $("#peliPoster").attr('src', pelicula.Poster);
            $("#director").text(pelicula.Director);
            $("#genero").text(pelicula.Genre);
            $("#actores").text(pelicula.Actors);
            $("#sinopsis").text(pelicula.Plot);
        }
    };
}

function buscar(){

    //document.getElementById("pelis").empty();

    const query = document.getElementById("titulo").value;
    
    const request= new XMLHttpRequest();
    request.open('GET', 'http://www.omdbapi.com/?apikey=' + key + '&s=' + query);
    request.send();

    request.onreadystatechange = (e) => {
        if(request.readyState === 4){
            const resultados = JSON.parse(request.responseText);

            console.log(resultados);
            resultados.Search.forEach(element => {
                const filaNueva = document.createElement("tr");
                const celdaTitulo = document.createElement("td");
                const celdaAnio = document.createElement("td");
                const celdaImagen = document.createElement("td");

                celdaTitulo.innerText = element.Title;
                celdaAnio.innerText = element.Year;

                const imgThumbnail = document.createElement("img");
                imgThumbnail.src = element.Poster;
                imgThumbnail.alt = "poster";
                imgThumbnail.height = 200;

                celdaImagen.appendChild(imgThumbnail);
                filaNueva.appendChild(celdaTitulo);
                filaNueva.appendChild(celdaAnio);
                filaNueva.appendChild(celdaImagen);

                filaNueva.onclick = () => {
                    detallePelicula(element.imdbID);
                };

                document.getElementById("pelis").appendChild(filaNueva);


            });

        }
    };

    return false;

}