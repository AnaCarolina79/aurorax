import React from 'react'
import Navbar from '../../components/navbar'
import Card from '../../components/cardPresentation'

import presentation from '../../assets/presentation.png'
import './style.scss'
function LandingPage() {
  return (
    <>
        <Navbar/>
        <img className='presentation' src={presentation} alt="presentation" />
        <div className='textPresentation'>
            <div className='text'>

            <h1>Um <spam>espaço</spam> feito para o seu <spam>crescimento.</spam></h1>
            <p>Comece hoje sua jornada e descubra do que é capaz!</p>           
            <div className='botoes'>

            <button className='inscreva-se'>Inscreva-se</button>
            <button className='inscreva-se'>Como funciona</button>
            </div>
            </div>
        </div>
        <Card/>
    </>
  )
}

export default LandingPage