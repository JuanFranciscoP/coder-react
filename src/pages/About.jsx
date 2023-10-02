import React from 'react'
import { Container } from 'react-bootstrap'
import gatito from "../Img/gatito.jpg"

const About = () => {
  return (
    
      <Container className='nosotros'>
      <h2 className='nosotros-text'>Sobre Nosotros</h2>
      <div>
      <img className='imagen-gato' src={gatito} alt="asd" />
      </div>
      
      </Container>
      
    
  )
}

export default About