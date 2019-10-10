import React from 'react'
import moment from 'moment'


export default ({registros, deleteRegister}) => {

  return (
      <div>
          <table className="z-depth-2 hoverable">
            <thead>
              <tr>
                <th>Fechas</th>
                <th>Peso (Kg)</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr> */}
                {registros.map(registro=>{
                  return(
                    <tr key={registro[0]}>
                      <td>{moment(registro[0]).format('LL')}</td>
                      <td>{registro[1]}</td>
                      <td><button 
                            className="btn-floating btn-small" 
                            onClick={deleteRegister.bind(this,registro)}
                            >
                            <i className="material-icons" >clear</i>
                          </button>
                        </td>
                    </tr>
                  )
                })}
                {/* <td></td>
              </tr> */}
            </tbody>
          </table>       
      </div>
      )
    }

