import React, { useState } from 'react'
import { useCharacter } from '../CharacterContext'
import Icon from './Icon'

export default function Header() {
  const { isLoading, characters, selectedCharacter, setSelectedCharacter, infoType, setInfoType, setCurrentText } = useCharacter()
  const [ showDropdown, setShowDropdown ] = useState(false)

  const handleToggle = () => {
    infoType === "talents" ? setInfoType("constellations") : setInfoType("talents")
    setCurrentText("character info")
  }

  return (
    <header className='header'>
      {!isLoading && (
        <div className='header__selected-character' onClick={() => setShowDropdown(!showDropdown)}>
          <Icon 
            className='header__character-icon' 
            endpoint={`${selectedCharacter.id}/icon`}
            element={selectedCharacter.vision}
          />
          <span className='header__character-name'>{selectedCharacter.name} <span className={`dropdown-arrow${showDropdown ? "--active" : ""}`}>▼</span></span>
          {showDropdown && (
            <div className='header__dropdown'>
              {characters.map((character) => (
                <div
                  key={character.id}
                  className='header__dropdown-item'
                  onClick={() => {
                    setSelectedCharacter(character)
                    setShowDropdown(!showDropdown)
                }}>
                  <Icon 
                    className='header__character-icon' 
                    endpoint={`${character.id}/icon`}
                    element={character.vision}
                  />
                  <span className='header__character-name'>{character.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="header__switch">
       Talents
       <label className="header__switch--toggle">
        <input 
          className="header__switch--toggle-input"
          type="checkbox"
          onChange={handleToggle} 
        />
        <span className="header__switch--toggle-slider"></span>
       </label>
       Constellations
      </div>
    </header>
  )
}
