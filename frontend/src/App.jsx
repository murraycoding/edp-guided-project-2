import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Character from './components/Character'

function App() {
  // const [characters, setCharacters] = useState([])


  useEffect(() => {
    // makes a fetch request to get the people from the server
    // characters = fetch(....)
    console.log("this is a test")
  }, [])

  const characters = [
    {'name':'Brian','planet':'Earth'},
    {'name':'Alessandro','planet':'Earth'},
  ]

  const character_components = characters.map( (character, index) => 
  <Character key={index} name={character.name}/>)

  return (
    <>
        <h1>Star Wars Universe Lookup</h1>
       {character_components}
    </>
  )
}

export default App
