import React, { Component } from 'react'
import Highcharts from 'highcharts'



export default class Grafica extends Component {
    componentDidMount() {
        this.initHighChart(this.props.registros)
      }
    componentWillReceiveProps(nextProps){
        this.initHighChart(nextProps.registros)
    }

    initHighChart = (registro) => Highcharts.chart('grafico', {
    title:{
        text: 'Mi registro de peso'
    },
    xAxis:{
        type: 'datetime',
        startOnTick: true
    },
    // chart:{
    //   type:'column'
    // },
    series:[{
        name:'peso',
        data: registro
    }]
    })

  render() {
    return (
      <div>
        {/* muestra la grafica en pantalla */}
        <div id="grafico" className="z-depth-2 hoverable"/>
      </div>
    )
  }
}
