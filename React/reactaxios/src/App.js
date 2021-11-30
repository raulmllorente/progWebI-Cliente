import Header from './components/Header';
import Table from './components/Table';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cabecera: ['Album', 'Identificador', 'Titulo', 'Imagen'],
      datos: []
    }

  }

  // Uso del ciclo de vida de los componentes: https://reactjs.org/docs/state-and-lifecycle.html
  componentDidMount() {
    //Uso de axios con react: https://www.freecodecamp.org/news/how-to-use-axios-with-react/
    const url = 'https://jsonplaceholder.typicode.com/photos';
    axios.get(url).then((response) => {
        this.setState({datos: response.data});
    });
}

  render() {
    return (
      <div className="App">
        <Header ejercicio="Axios"></Header>
        <Table cabeceras={this.state.cabecera} filas={this.state.datos}></Table>
      </div>
    );
  }
}
export default App;
