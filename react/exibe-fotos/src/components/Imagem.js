import React from 'react'

const Imagem = ({key, url, alt, imgStyle}) => {
  //url e alt
  // const url = props.url
  // const alt = props.alt
  // const { url, alt } = props
  return (
    <div
      key={key}
      className={`${imgStyle} flex justify-content-center`}>
      <img 
        src={url} 
        alt={alt}/>
    </div>
  )
}

export default Imagem