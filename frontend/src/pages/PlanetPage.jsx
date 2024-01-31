import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Character from "../components/Character";
import FilmButton from '../components/FilmButton';

export default function PlanetPage() {
    const params = useParams();
    let id = params.id;

    // state variables for data to be loaded from API
    const [planetInfo, setPlanetInfo] = useState([])
    const [filmInfo, setFilmInfo] = useState([])
    const [charactersInfo, setCharactersInfo] = useState([])

    // grabs the info from the API when the page loads
    useEffect(
        () => {
            fetch(`/api/planets/${id}`).then(res => res.json()).then(planetInfo => setFilmInfo(planetInfo))
            fetch(`/api/films/${id}/characters`).then(res => res.json()).then(charactersInfo => setCharactersInfo(charactersInfo))
            fetch(`/api/films/${id}/planets`).then(res => res.json()).then(planetsInfo => setPlanetsInfo(planetsInfo))
        },
    [])

    const character_components = charactersInfo.map((character, index) => <Character key={index} name={character.name} id={character.id}/>)
    const planet_components = planetsInfo.map((planet, index) => <PlanetButton key={index} name={planet.name} id={planet.id}/>)

    return (
        <section>
            <h1>{filmInfo.title}</h1>
            <h2>Characters</h2>
            {character_components}
            <h2>planets Info</h2>
            {planet_components}
        </section>
    )
}