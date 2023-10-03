import React from 'react'
import { Container } from 'react-bootstrap'
import gatito from "../Img/gatito.jpg"

const About = () => {
  return (
    
      <div className='nosotros p-4'>
      <h2 className='nosotros-text'>Sobre Nosotros</h2> 
      <img className='imagen-gato' src={gatito} alt="asd" />
      </div>
      
    
  )
}

export default About