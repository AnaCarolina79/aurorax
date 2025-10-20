import React from 'react'
import './style.scss'
function Button({text}) {
  return (
    <button className='button' type='text'>{text}</button>
  )
}

export default Button