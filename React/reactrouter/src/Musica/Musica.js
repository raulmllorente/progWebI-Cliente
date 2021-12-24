import React from 'react';
import axios from 'axios';
import Form from './componentes/Form'
import TablaReleases from "./componentes/TablaReleases";
import FichaRelease from "./componentes/FichaRelease";

class Musica extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resultados: [],
      detalleAlbum: null,
      caratula: null
    }

    this.onSearch = this.onSearch.bind(this);
    this.onClickedAlbum = this.onClickedAlbum.bind(this);
  }



  onSearch(query) {
    // Lanzo la petición
    const url = 'https://musicbrainz.org/ws/2/release-group?query='+query+'&offset=0&fmt=json';
    axios.get(url).then((r) => {
      this.setState({
        resultados: r.data['release-groups'],
        detalleAlbum: null
      })
    }).catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
    });
  }

  onClickedAlbum(mbid) {
    // Lanzo la petición
    const url = 'https://musicbrainz.org/ws/2/release-group/'+mbid+'?fmt=json&inc=releases';
    axios.get(url).then((r) => {
      
      this.setState({
        detalleAlbum: r.data
      });
    })
    .catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
    });

    //Busco la caratula
    const url_caratula = 'http://coverartarchive.org/release-group/'+ mbid;
    
    axios.get(url_caratula).then((r) => {

      this.setState({
        caratula: r.data.images[0].image
      });
        
       
      })
    .catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
    });
  }

  render() {
    if (this.state.detalleAlbum)
      return ( 
        <div><FichaRelease datos = {this.state.detalleAlbum} poster={this.state.caratula}/>
        <Form buscar = {this.onSearch}/></div>
      );
    else if (this.state.resultados)
      return ( 
        <div>
          <TablaReleases cabecera = {['Titulo', 'Artista', 'Tipo']}
            filas = {this.state.resultados} onClickedAlbum = {this.onClickedAlbum}/>
        <Form buscar = {this.onSearch}/></div>
      );
    else
      return ( 
        <div><Form buscar = {this.onSearch}/></div>
      );
  }

}

export default Musica;