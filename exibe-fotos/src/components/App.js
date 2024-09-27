// rafce
import React from 'react'
import Busca from './Busca'
import { createClient } from 'pexels'
import env from 'react-dotenv'
export default class App extends React.Component {

  //

  pexelsClient = null

  componentDidMount(){
    // this.pexelsClient = createClient(window.env.PEXELS_KEY)
    this.pexels = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    //usar o objeto pexelsClient
    //dele, você vai acessar a propriedade photos
    //sobre ela, você vai chamar o método search
    //a ele, você vai entregar, como parâmetro, um objeto Javascript
    //que tem uma propriedade chamada query associada ao valor do termo (esse que chegou via parâmetro)
    //sabendo que o resultado é uma promise, chame then sobre ela, passando como parâmetro para then, uma função que recebe um parâmetro chamado pics e apenas usa console.log para exibir o pics
  }
  render(){
    return (
      <div
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className='col-12'>
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className='col-8'>
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
      </div>
    )
  }
}
