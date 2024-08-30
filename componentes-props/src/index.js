import React from 'react'
import ReactDOM from  'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'
const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Ainda não chegou'
  const funcaoOK = () => alert('Agradecemos a confirmação')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')
  const componenteFeedback = 
    <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
  return (
    <div className='container border mt-2 py-5'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 col-xl-4 border py-5'>
          <Cartao cabecalho="22/04/2024">
            <Pedido 
              icone="fa-solid fa-hard-drive fa-shake fa-3x"
              titulo="SSD"
              descricao="SSD Kingston"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-6 col-xl-4 border  py-5'>
          <Cartao cabecalho="24/05/2024">
            <Pedido 
              icone="fa-solid fa-computer-mouse fa-beat fa-3x"
              titulo="Mouse"
              descricao="Microsoft Mouse 3500"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-12 col-xl-4 border  py-5'>
          <Cartao cabecalho="25/05/2024">
            <Pedido 
              icone="fa-solid fa-memory fa-fade fa-3x"
              titulo="Memória RAM"
              descricao="Memoria RAM de 16Gb"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)