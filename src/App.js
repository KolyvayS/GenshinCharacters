import React from 'react'
import Header from './components/Header'
import CharacterPage from './components/CharacterPage'
import { useCharacter } from './CharacterContext'
import "./App.scss"

export default function App() {
  const { isLoading } = useCharacter()
  return (
    <div>
      <Header />
      {!isLoading && <CharacterPage />}
    </div>
  )
}
