const api_root = 'https://musicbrainz.org/ws/2/';
const api_covers = 'http://coverartarchive.org/release-group/';

function obtenerArtista(mbid) {
    //TODO

}

function obtenerReleaseGroup(mbid) {
   //TODO
}

function getResults(entity, query, offset) {
   //TODO
}

function buscar() {
    // Extraemos el término de búsqueda
    const query = encodeURIComponent(document.getElementById('input_busqueda').value);
    const entity = document.getElementById('entity_selection').value;
    const offset = 0;
    // Lanzo la petición

    getResults(entity, query, offset);
    
}