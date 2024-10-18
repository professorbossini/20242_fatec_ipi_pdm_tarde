import React, { Component } from 'react'

// rcc
export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center border rounded p-3'>
        <div 
          className='spinner-border text-primary mb-3'
          style={{width: '3rem', height: '3rem'}}>
            <span className='visually-hidden'>Carregando</span>
        </div>
        <p className='text-primary'>{this.props.mensagem}</p>
      </div>
    )
  }
}

Loading.defaultProps = {
  mensagem: 'Carregando'
}
