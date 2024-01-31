import HomeworldButton from "../components/HomeworldButton"
import FilmButton from "../components/FilmButton"
import PlanetButton from '../components/PlanetButton'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CharacterPage() {
    const params = useParams();
    let id = params.id;

    let home_planet;

    const [characterInfo, setCharacterInfo] = useState({})
    const [films, setFilms] = useState([])
    const [characterPlanet, setCharacterPlanet] = useState([])

    useEffect(() => {
            const fetchData = async() => {
                await fetch(`/api/characters/${id}/films`).then(res => res.json()).then(films => setFilms(films))
                await fetch(`/api/characters/${id}`).then(res => res.json()).then(characterInfo => setCharacterInfo(characterInfo))
                await fetch(`/api/planets/${characterInfo.homeworld}`).then(res => res.json()).then(planetInfo => setCharacterPlanet(planetInfo))
            }
            fetchData();
        }, [])

    
    const filmComponents = films.map((film, index) => <FilmButton key={index} title={film.title} id={film.id}/>)
        console.log(films)
        console.log(characterInfo)
    
    return (
        <section>
            <h1>{characterInfo.name}</h1>
            <div className="character-info-section">
                <div className="character-info">Height: {characterInfo.height}cm</div>
                <div className="character-info">Mass: {characterInfo.mass}kg</div>
                <div className="character-info">Born: {characterInfo.birth_year}</div>
            </div>
            <h2>Homeworld</h2>
                <PlanetButton title={characterPlanet.name} id={characterPlanet.id}  />
            <h2>Films Appeared In</h2>
            {filmComponents}
        </section>
    )
}