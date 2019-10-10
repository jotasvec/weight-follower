import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/Header'
// import moment from 'moment'
import Grafica from './components/Grafica'
import Table from './components/Table'
import Form from './components/Form'
import M from 'materialize-css'



class App extends React.Component {
  state = {
     //registro: [fecha, peso]
    registro: [],
    show_box: 'scale-out'
  }

  initMaterializeCssContent = () => {
    //iniciando tooltip en botones de crear nuevo registro y limpiar registros
    M.AutoInit();
    // document.addEventListener('DOMContentLoaded', function() {
    //   let elems = document.querySelectorAll('.tooltipped');
    //   M.Tooltip.init(elems);
    // });
  }

  componentDidMount(){
    //init some js for materialize
    this.initMaterializeCssContent()

    //montando/iniciando los registros en memoria
    if(localStorage.getItem('registros')){
      const registro = JSON.parse(localStorage.getItem('registros'))
      this.setState({
        registro
      })
    }
  }
  // crearRegistro = () => {
  //   const nRegistro = [moment(), Math.random()*200]
  //   this.setState({
  //     registro: [...this.state.registro, nRegistro]
  //   })
  // }

  aceptarRegistro = ({fecha, peso}) => {
    const nRegistro = [+fecha, +peso]
    const nStateRegistro = [...this.state.registro, nRegistro]
    //de esta forma se puede agregar agregar los registros al state
    //   this.setState((prevState, props) => ({
    //     registro: [...prevState.registro, nRegistro]
    //   }) )
    // }

  this.updateRegister(nStateRegistro)
    // para asiganr los valores al local storage 
    // localStorage.setItem('registros', JSON.stringify(nStateRegistro))
    // ademas se tiene que agregar al actual state asi se actualiza en el momento
    // this.setState({
    //   registro: nStateRegistro
    // })
  }
  deleteRegister = (reg) => {
    const regUpdated = [...this.state.registro.filter(
      registro => registro !== reg
      )]
    this.updateRegister(regUpdated)
  }

  updateRegister = (reg) => {
    this.setState({
      registro: reg
    })
    localStorage.setItem('registros', JSON.stringify(reg))
  }

  clearAll = () => {
    localStorage.clear()
    this.setState({registro:[]})
  }


  onVisible = () => {
    this.setState({
      show_box: this.state.show_box === 'scale-out' ? 'scale-in':'scale-out'
    })
  }


  // onFadeIn = () => {
  //   if(this.state.show_box === 'scale-out'){
  //     this.setState({
  //       show_box: 'scale-in'
  //     })
  //   }else{
  //     this.onFadeOut()
  //   }
  // }

  // onFadeOut = () => {
  //   this.setState({
  //     show_box: 'scale-out'
  //   })
  // }

  render(){
    const btnAdd = {
      position: 'absolute',
      top: '85%',
      left: '10%',
    }
    const btnClear ={
      position: 'absolute',
      top: '85%',
      left: '5%',
    }
  return (
    <div className="App">
      <Header/>
      <Form 
        onAceptarRegistro={this.aceptarRegistro}
        mostrar={this.state.show_box} 
        // cerrar={this.onFadeOut} 
        onVisible={this.onVisible}
      />
      <main>
        <div className="row">
          <div className="col l6 m12 s12">
            <Grafica registros={this.state.registro}/>
          </div>
          <div className="col l6 m12 s12">
            <Table 
              registros={this.state.registro}
              deleteRegister={this.deleteRegister}
            />
          </div>
        </div>
      </main>
      <button className="btn-floating btn-large waves-effect waves-light teal accent-3 pulse tooltipped"
        data-position="top"
        data-tooltip="Agregar un nuevo registro" 
        // onClick={this.crearRegistro}
        // onClick={this.onFadeIn}
        onClick={this.onVisible}
        style={btnAdd} >
        <i className="material-icons">add</i>
      </button>
      <button className="btn-floating btn-large waves-effect waves-light red accent-3 pulse tooltipped"
        data-position="top"
        data-tooltip="eliminar todos los registros" 
        style={btnClear} 
        onClick={this.clearAll}>
        <i className="material-icons">clear</i>
      </button>
    </div>
  );
}
}

export default App;
