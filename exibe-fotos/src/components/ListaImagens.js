import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({pics, imgStyle}) => {
  return (
    pics.map((pic, key) => (
      <Imagem
        imgStyle={imgStyle} 
        url={pic.src.small}
        alt={pic.alt}
        key={key}
      />
    ))
  )
}

export default ListaImagens