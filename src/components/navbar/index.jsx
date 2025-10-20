import React from 'react'
import './style.scss'
import logo from '../../assets/auroraxLogo.svg'
import Button from '../button'
function Navbar() {
  return (
    <div className='navbar'>
    <div className='nav'>
        <img src={logo} alt="Logo" />
        <div className='navbar-center'>
            <a href="">Inicio</a>
            <a href="">Sobre Nós</a>
            <a href="">Alguma Coisa</a>
            <a href="">Contato</a>
        </div>
           <Button text={"Inscreva-se"}/>
    </div>
    </div>
  )
}

export default Navbar