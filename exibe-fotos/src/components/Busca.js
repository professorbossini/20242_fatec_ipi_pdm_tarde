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
  }
  render() {
    return (
      <div
        className='flex flex-column'>
          <IconField iconPosition='left'>
            <InputIcon className='pi pi-search'/>
          <InputText className='w-full text-center' placeholder={this.props.dica} />
          </IconField>
          <Button 
            label="OK"
            className='p-button-outlined mt-2'
          />
      </div>
    )
  }
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver...'
}
