import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cabecera: ['Nombre', 'Apellidos', 'Fecha de Nacimiento', 'Contratado', 'Borrar'],
      datos: [
        ['Pepa', 'Flores', '2/02/2002', 'Si', 'borrar'],
        ['Luis', 'Garcia', '8/8/1998', 'No', 'borrar'],
        ['Tomas', 'Rodriguez', '7/7/1997', 'Si', 'borrar']
      ]
    }

    //Binding del manejador del evento para que sepa que es 'this'
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const nuevasFilas = this.state.datos.filter((fila, index) => {
      //funcion de filtrado, devuelve las filas cuyo indice es distinto al que queremos eliminar
      //Es una funcion de javascript, para filtrar arrays, ver referencia: https://www.w3schools.com/jsref/jsref_filter.asp
      return index !== i;
    });
    this.setState({datos: nuevasFilas});
  }

  render() {
    return (
      <div className="App">
        <Header ejercicio="Empleados test"></Header>
        <Table cabeceras={this.state.cabecera} filas={this.state.datos} handleClick={this.handleClick}></Table>
      </div>
    );
  }
}


export default App;
