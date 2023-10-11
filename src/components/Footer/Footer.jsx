import React from 'react'
import { Link } from 'react-router-dom'
import instaimg from '../../assets/Img/instagram.png'
import facebookimg from '../../assets/Img/facebook.png'

const Footer = () => {

    return (
    <footer className="footer">
        <div>
            <ul>
                <li><Link href="./contacto.html">Contacto</Link></li>
                <li><Link href="./nosotros.html">Empresa</Link></li>
                <li><Link href="#">Locales</Link></li>
                <li><Link href="#">Devoluciones y cambios</Link></li>
            </ul>
        </div>
        <p className="footer__texto">Tienda Online - Todos los derechos reservados</p>
        <div className="social">
            <p>Encontranos en Redes:</p>
            <div className="social__logo">
                <Link><img src={instaimg}/></Link>
                <Link><img src={facebookimg} alt="logo instagram"/></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer