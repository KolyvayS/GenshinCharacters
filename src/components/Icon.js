import React from 'react'
import { useCharacter } from '../CharacterContext'

export default function Icon({ endpoint, onClick, index, element }) {
  const { currentText } = useCharacter()
  
  return (
    <div 
      className={`icon ${currentText === index ? "active-icon" : ""} ${element.toLowerCase()}`} 
      onClick={onClick ? onClick : undefined}
    >
      <div className='icon__inner'></div>  
      <img className='icon__image' alt="icon" src={`https://genshin.jmp.blue/characters/${endpoint.toLowerCase()}`} />
    </div>
  )
}
