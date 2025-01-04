import React from 'react'

export default function CharacterPortrait({ index, rarity }) {
    const stars = []
    for(let i = 0; i < rarity; i++){
        stars.push(
            <img 
                key={i}
                className='character-portrait__rarity-star'
                src={'https://static.vecteezy.com/system/resources/previews/023/258/446/non_2x/a-star-with-transparent-background-sticker-illustration-free-png.png'}
                alt={`Star #${i}`}
            />
        )
    }
    
    return (
        <div className='character-portrait'>
            <img 
                className='character-portrait__image' 
                alt="Character Portrait" 
                src={`https://genshin.jmp.blue/characters/${index.toLowerCase()}/card`}
            />
            <div className='character-portrait__rarity'>
                {stars}
            </div>
        </div>
    )
}
