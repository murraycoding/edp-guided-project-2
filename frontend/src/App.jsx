import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Character from './components/Character'
import AboutPage from './pages/AboutPage'
import CharacterPage from './pages/CharacterPage'
import FilmPage from './pages/FilmPage'

function App() {
  // const [characters, setCharacters] = useState([])


  useEffect(() => {
    // makes a fetch request to get the people from the server
    // characters = fetch(....)
    console.log("this is a test")
  }, [])

  const characters = [
    {'name':'Brian','planet':'Earth', 'id':1},
    {'name':'Alessandro','planet':'Earth','id':2},
  ]

  const character_components = characters.map( (character, index) => 
  <Character key={index} name={character.name} id={character.id}/>)

  return (
    <div className="App">
        <h1>Star Wars Universe Lookup</h1>
        {character_components}
        <Routes>
          <Route path='/' component={AboutPage} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/films/:id" element={<FilmPage />} />
        </Routes>
        
    </div>
  )
}

export default App
