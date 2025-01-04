import React from 'react'
import { useEffect, useState, createContext, useContext } from 'react'

const CharacterContext = createContext()

export const CharacterProvider = ({ children }) => {
    const [ characters, setCharacters ] = useState([])
    const [ selectedCharacter, setSelectedCharacter ] = useState(null)
    const [ infoType, setInfoType ] = useState("talents")
    const [ currentText, setCurrentText ] = useState("character info")
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        fetch('https://genshin.jmp.blue/characters/all')
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((character) => character.nation !== "Natlan") //lack of information
                setCharacters(filteredData)
                setSelectedCharacter(filteredData[0])
                setIsLoading(false)
            })
            .catch((err) => {
                console.error('Error fetching characters:', err)
                setIsLoading(false)
            })
    }, [])

    return(
        <CharacterContext.Provider value={{ 
            characters, 
            selectedCharacter, 
            setSelectedCharacter, 
            isLoading, 
            infoType, 
            setInfoType,
            currentText,
            setCurrentText 
            }}>
         {children}
        </CharacterContext.Provider> 
    )
}

export const useCharacter = () => useContext(CharacterContext)