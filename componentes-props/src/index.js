import React from 'react'
import ReactDOM from  'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
const App = () => {
  return (
    <div className='container border mt-2 py-5'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 col-xl-4 border py-5'>
          <Pedido 
            data="22/04/2024"
            icone="fa-solid fa-hard-drive fa-shake fa-3x"
            titulo="SSD"
            descricao="SSD Kingston"
          />
        </div>
        <div className='col-sm-12 col-lg-6 col-xl-4 border  py-5'>
          <Pedido 
            data="24/05/2024"
            icone="fa-solid fa-computer-mouse fa-beat fa-3x"
            titulo="Mouse"
            descricao="Microsoft Mouse 3500"
          />
        </div>
        <div className='col-sm-12 col-lg-12 col-xl-4 border  py-5'>
          <Pedido 
            data="25/05/2024"
            icone="fa-solid fa-memory fa-fade fa-3x"
            titulo="Memória RAM"
            descricao="Memoria RAM de 16Gb"
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)