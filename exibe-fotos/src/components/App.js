// rafce
import React from 'react'
import Busca from './Busca'
//import { createClient } from 'pexels'
//import env from 'react-dotenv'
import pexelsClient from '../utils/pexelsClient'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
export default class App extends React.Component {

  state = {
    pics: []
  }

  //pexelsClient = null

  // componentDidMount(){
  //   // this.pexelsClient = createClient(window.env.PEXELS_KEY)
  //   this.pexelsClient = createClient(env.PEXELS_KEY)
  // }

  // onBuscaRealizada = (termo) => {
  //   //usar o objeto pexelsClient
  //   //dele, você vai acessar a propriedade photos
  //   //sobre ela, você vai chamar o método search
  //   //a ele, você vai entregar, como parâmetro, um objeto Javascript
  //   //que tem uma propriedade chamada query associada ao valor do termo (esse que chegou via parâmetro)
  //   //sabendo que o resultado é uma promise, chame then sobre ela, passando como parâmetro para then, uma função que recebe um parâmetro chamado pics e apenas usa console.log para exibir o pics
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //   .then(pics => {
  //     console.log(pics)
  //     this.setState({pics: pics.photos})
  //   })
  // }

  onBuscaRealizada = async (termo) => {
    const result = await pexelsClient.get('/search', {
      params: { query: termo}
    })
    // console.log(result)
    this.setState({pics: result.data.photos})
  }  
  render(){
    return (
      <div
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className='col-12'>
            <PexelsLogo/>
          </div>
          <div className='col-12'>
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className='col-12'>
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
          <div className='col-12'>
            {/* [1, 2, 3] => [2, 4, 6] */}
            <div className='grid'>
              <ListaImagens 
                imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}
                pics={this.state.pics} />
            </div>
          </div>
      </div>
    )
  }
}
