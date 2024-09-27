// rcc: react class component
import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export default class Busca extends Component {
  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (event) => {
    console.log(event.target.value)
    this.setState({termoDeBusca: event.target.value})  
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div
          className='flex flex-column'>
            <IconField iconPosition='left'>
              <InputIcon className='pi pi-search'/>
              {/* <input type=text />  value*/} 
            <InputText
              value={this.state.termoDeBusca} 
              className='w-full text-center' 
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado} />
            </IconField>
            <Button 
              label="OK"
              className='p-button-outlined mt-2'
            />
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver...'
}
