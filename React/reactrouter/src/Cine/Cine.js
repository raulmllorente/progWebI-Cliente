import React from 'react';
import axios from 'axios';
import Form from './componentes/Form'
import TablaPeliculas from "./componentes/TablaPeliculas";
import FichaPelicula from "./componentes/FichaPelicula";

const api_key = "de3d4215";

class Cine extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resultados: [],
      detallePelicula: null
    }

    this.onSearch = this.onSearch.bind(this);
    this.onClickedMovie = this.onClickedMovie.bind(this);
  }



  onSearch(query) {
    // Lanzo la petición
    const url = 'http://www.omdbapi.com/?apikey=' + api_key + '&s=' + query;
    axios.get(url).then((r) => {
      this.setState({
        resultados: r.data.Search,
        detallePelicula: null
      })
    }).catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
    });
  }

  onClickedMovie(id) {
    // Lanzo la petición
    console.log(id);
    axios.get('http://www.omdbapi.com/?apikey=' + api_key + '&i=' + id).then((r) => {
      this.setState({
        detallePelicula: r.data
      });
    })
    .catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
    });
  }

  render() {
    if (this.state.detallePelicula)
      return ( <div> <FichaPelicula datos = {this.state.detallePelicula}
        /> <Form buscar = {this.onSearch}/></div >
      );
    else if (this.state.resultados)
      return ( < div > < TablaPeliculas cabecera = {
          ['Titulo', 'Año', 'Imagen']
        }
        filas = {
          this.state.resultados
        }
        onClickedMovie = {
          this.onClickedMovie
        }
        /> <
        Form buscar = {
          this.onSearch
        }
        /></div >
      );
    else
      return ( <div div >
        <
        Form buscar = {
          this.onSearch
        }
        /></div >
      );
  }

}

export default Cine;