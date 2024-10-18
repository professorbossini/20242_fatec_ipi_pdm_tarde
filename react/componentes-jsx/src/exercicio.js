import React from 'react'
import ReactDOM from 'react-dom'

//1. Um componente React pode ser definido por meio de uma função Javascript que devolve a expressão JSX

//2. Um componente pode ser definido por meio de uma classe Javascript que define uma função chamada render que, por sua vez, devolve a expressão JSX

//1. Definir um componente React, chamado PrimeiroNome, que devolve um p com o seu primeiro nome
const PrimeiroNome = () => <p>Rodrigo</p>

//2. Definir um componente React, chamado Sobrenome, que devolve um p com o seu sobrenome.
const Sobrenome = function(){
  return <p>Bossini</p>
}

//3. Fazer com que o componente App utilize ambos como filhos de um div raiz.
const App = () => {
  return <div>
    {/* primeiro componente aqui */}
    <PrimeiroNome />
    <Sobrenome />
    {/* segundo componente aqui  */}
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)