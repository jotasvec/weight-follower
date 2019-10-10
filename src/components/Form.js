import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.min.css'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'
// import moment from 'moment';

// instalar sweetalert  ->  clase "formulario react"
// instalar react-datepicker npm install react-datepicker --save  -> clase form y estado del componente

export default class Form extends Component {
    state = {
        fecha: new Date(),
        peso: ''
    }
    onSubmit = () => {
        const { fecha, peso } = this.state

    if(!peso || peso < 0) {
        swal("Ingrese un peso valido",'recuerda, el peso debe ser un numero mayor que 0',"error")
    }else{
        // console.log(fecha, peso)
        this.props.onAceptarRegistro({fecha, peso})
        // this.closed_box()
    }
    // console.log(fecha, peso)    
    }

    changeDate = (fecha) => {
        this.setState({
            fecha
        })
    }
    changeWeight = (evt) => {
        this.setState({
            peso: evt.target.value
        })
        evt.preventDefault()

    }

    closed_box = () => {
        this.props.onVisible()
    }
    render() {
        return (
            <div className="row">
                <div className={`form-container col s4 offset-s4 z-depth-4 cyan lighten-5 scale-transition ${this.props.mostrar}`}>
                    <form >
                        <div className="input-field">
                            <label htmlFor="fecha" className="active">Fecha:</label>
                            {/* <input type="text" name="fecha" id="fecha" className="datepicker validate" 
                                
                                // value={this.state.fecha}
                                onChange={this.changeDate} 
                                /> */}
                            <DatePicker
                                selected={this.state.fecha} 
                                onChange={this.changeDate} 
                                dateFormat="MMMM d, yyyy"
                            />
                        </div>
                        <div className="input-field">
                            <input type="number" name="peso" id="peso" className="validate" onChange={this.changeWeight} />
                            <label htmlFor="peso" className="active">Peso:</label>
                            <span className="helper-text" data-error="must be a number" data-success="right" />
                        </div>
                    </form>
                    <div className="row btns-row">
                        <button className="btn-small" onClick={this.onSubmit}> agregar</button>
                        <button className="btn-small  btn-closed"  
                            onClick={this.closed_box}
                        >cerrar</button>
                    </div>
                </div>
            </div>
        )
    }
}
