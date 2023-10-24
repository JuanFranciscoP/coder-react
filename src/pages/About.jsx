import React from 'react'
import gatito from "../assets/Img/gatito.jpg"

const About = () => {
  return (
    <div>
        <h2 className='list-title'>Sobre Nosotros</h2>
        <div className='nosotros p-4'> 
        <img className='imagen-gato' src={gatito} alt="asd" />
        </div>

    </div>
      
      
    
  )
}

export default About