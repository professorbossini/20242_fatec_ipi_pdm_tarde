import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    }
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5,21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estouNoSul = latitude < 0
    if(data >= d1 && data < d2)
      return estouNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estouNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estouNoSul ? 'Verão' : 'Inverno'
    return estouNoSul ? 'Outono' : 'Primavera'

  }

  icones = {
    'Primavera': 'fa-solid fa-seedling',
    'Verão': 'fa-solid fa-sun',
    'Outono': 'fa-brands fa-canadian-maple-leaf',
    'Inverno': 'fa-solid fa-snowflake'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        //1. construir um objeto Date que representa a data atual do sistema
        let data = new Date()
        //2. obter a estacao climatica usando a funcao obterEstacao
        let estacao = this.obterEstacao(data, posicao.coords.latitude)
        //3. obter o icone, usando o mapa que a gente acabou fazer
        let icone = this.icones[estacao]
        //4. atualizar o estado do componente usando a função this.setState
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleString(),
          icone: icone

        })

      }
    )
  }

  render(){
    return (
      <div className='container p-4 border mt-2'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-8'>
              <div className='card'>
                <div className='card-body'>
                  <div
                    className='d-flex align-items-center' 
                    style={{height: '6rem'}}>
                      <i className={`fa-5x ${this.state.icone}`}></i>
                      <p className='w-75 ms-3 text-center fs-1'>{this.state.estacao}</p>
                  </div>
                  <p className='text-center'>
                    {
                      this.state.latitude ?
                        `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                      :
                      'Clique no botão para saber a sua estação climática'

                    }
                  </p>
                  <button
                    onClick={this.obterLocalizacao}
                    className='btn btn-outline-primary w-100 mt-2'>
                    Qual a minha estação?
                  </button>  
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

export default App