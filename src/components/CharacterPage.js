import React from 'react'
import { useCharacter } from '../CharacterContext'
import Icon from './Icon'
import CharacterPortrait from './CharacterPortrait';

export default function CharacterPage() {
    const { selectedCharacter, infoType, currentText, setCurrentText } = useCharacter()

    const renderTextInfo = () => {
      switch(currentText) {
        case("character info"):
         return(<div className='character-page__text-info'>
          <p><b>Element:</b> {selectedCharacter.vision}</p>
          <p><b>Type of weapon:</b> {selectedCharacter.weapon}</p>
          <p><b>Nation:</b> {selectedCharacter.nation}</p>
          <p><b>Birthday:</b> {selectedCharacter.birthday.slice(-5)}</p>
          <p><b>Description:</b> {selectedCharacter.description}</p>
         </div>)
        case("normal attack"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.skillTalents[0].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.skillTalents[0].name}</p>
            <p><b>Description:</b> {selectedCharacter.skillTalents[0].description}</p>
          </div>)
        case("elemental skill"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.skillTalents[1].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.skillTalents[1].name}</p>
            <p><b>Description:</b> {selectedCharacter.skillTalents[1].description}</p>
          </div>)
        case("elemental burst"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.skillTalents[2].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.skillTalents[2].name}</p>
            <p><b>Description:</b> {selectedCharacter.skillTalents[2].description}</p>
          </div>)
        case("passive 1"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> Passive talent</p>
            <p><b>Name:</b> {selectedCharacter.passiveTalents[0].name}</p>
            <p><b>Description:</b> {selectedCharacter.passiveTalents[0].description}</p>
          </div>)
        case("passive 2"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> Passive talent</p>
            <p><b>Name:</b> {selectedCharacter.passiveTalents[1].name}</p>
            <p><b>Description:</b> {selectedCharacter.passiveTalents[1].description}</p>
          </div>)
        case("passive 3"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> Passive talent</p>
            <p><b>Name:</b> {selectedCharacter.passiveTalents[2].name}</p>
            <p><b>Description:</b> {selectedCharacter.passiveTalents[2].description}</p>
          </div>)
        case("constellation 1"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.constellations[0].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.constellations[0].name}</p>
            <p><b>Description:</b> {selectedCharacter.constellations[0].description}</p>
          </div>)
        case("constellation 2"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.constellations[1].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.constellations[1].name}</p>
            <p><b>Description:</b> {selectedCharacter.constellations[1].description}</p>
          </div>)
        case("constellation 3"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.constellations[2].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.constellations[2].name}</p>
            <p><b>Description:</b> {selectedCharacter.constellations[2].description}</p>
          </div>)
        case("constellation 4"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.constellations[3].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.constellations[3].name}</p>
            <p><b>Description:</b> {selectedCharacter.constellations[3].description}</p>
          </div>)
        case("constellation 5"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.constellations[4].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.constellations[4].name}</p>
            <p><b>Description:</b> {selectedCharacter.constellations[4].description}</p>
          </div>)
        case("constellation 6"):
          return(<div className='character-page__text-info'>
            <p><b>Type:</b> {selectedCharacter.constellations[5].unlock}</p>
            <p><b>Name:</b> {selectedCharacter.constellations[5].name}</p>
            <p><b>Description:</b> {selectedCharacter.constellations[5].description}</p>
          </div>)
        default:
          break
      }
    }

  return (
    <main className='character-page'>
      <div className='character-page__topic'>
        <Icon 
          index="character info" 
          className='character-page__topic-icon' 
          endpoint={`${selectedCharacter.id}/icon`} 
          onClick={() => setCurrentText("character info")} 
          element={selectedCharacter.vision}
        />
        <h1 className='character-page__topic-name'> {selectedCharacter.name} </h1>
      </div>
      <div className='character-page__body'>
        {infoType === "talents" ? (
          <div className='character-page__body-sidebar'>
            <Icon 
              index="normal attack" 
              endpoint={`${selectedCharacter.id}/talent-na`} 
              onClick={() => setCurrentText("normal attack")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="elemental skill" 
              endpoint={`${selectedCharacter.id}/talent-skill`} 
              onClick={() => setCurrentText("elemental skill")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="elemental burst" 
              endpoint={`${selectedCharacter.id}/talent-burst`} 
              onClick={() => setCurrentText("elemental burst")}
              element={selectedCharacter.vision}
            />
          </div>
        ) :
          <div className='character-page__body-sidebar'>
            <Icon 
              index="constellation 1" 
              endpoint={`${selectedCharacter.id}/constellation-1`} 
              onClick={() => setCurrentText("constellation 1")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="constellation 2" 
              endpoint={`${selectedCharacter.id}/constellation-2`} 
              onClick={() => setCurrentText("constellation 2")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="constellation 3" 
              endpoint={`${selectedCharacter.id}/constellation-3`} 
              onClick={() => setCurrentText("constellation 3")}
              element={selectedCharacter.vision}
            />
          </div>
        }
        <CharacterPortrait index={selectedCharacter.id} rarity={selectedCharacter.rarity}/>
        {infoType === "talents" ? (
          <div className='character-page__body-sidebar'>
            <Icon 
              index="passive 1" 
              endpoint={`${selectedCharacter.id}/talent-passive-0`} 
              onClick={() => setCurrentText("passive 1")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="passive 2" 
              endpoint={`${selectedCharacter.id}/talent-passive-1`} 
              onClick={() => setCurrentText("passive 2")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="passive 3" 
              endpoint={`${selectedCharacter.id}/talent-passive-2`} 
              onClick={() => setCurrentText("passive 3")}
              element={selectedCharacter.vision}
            />
          </div>
        ) :
          <div className='character-page__body-sidebar'>
            <Icon 
              index="constellation 4" 
              endpoint={`${selectedCharacter.id}/constellation-4`} 
              onClick={() => setCurrentText("constellation 4")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="constellation 5" 
              endpoint={`${selectedCharacter.id}/constellation-5`} 
              onClick={() => setCurrentText("constellation 5")}
              element={selectedCharacter.vision}
            />
            <Icon 
              index="constellation 6" 
              endpoint={`${selectedCharacter.id}/constellation-6`} 
              onClick={() => setCurrentText("constellation 6")}
              element={selectedCharacter.vision}
            />
          </div>
        }
      </div>
      <div className='character-page__text'>
        {renderTextInfo()}
      </div>
      <div className='extra-content' style={{background: `url("https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/${selectedCharacter.vision.toLowerCase()}-element-genshin-impact-wiki-guide.png") no-repeat center center  / contain`}}>
      </div>
    </main>
  )
}
