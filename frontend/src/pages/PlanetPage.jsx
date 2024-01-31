import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Character from "../components/Character";
import FilmButton from '../components/FilmButton';

export default function PlanetPage() {
    const params = useParams();
    let id = params.id;

    // state variables for data to be loaded from API
    const [planetInfo, setPlanetInfo] = useState([])
    const [filmsInfo, setFilmsInfo] = useState([])
    const [charactersInfo, setCharactersInfo] = useState([])

    // grabs the info from the API when the page loads
    useEffect(
        () => {
            fetch(`/api/planets/${id}`).then(res => res.json()).then(planetInfo => setPlanetInfo(planetInfo))
            fetch(`/api/planets/${id}/characters`).then(res => res.json()).then(charactersInfo => setCharactersInfo(charactersInfo))
            fetch(`/api/planets/${id}/films`).then(res => res.json()).then(filmsInfo => setFilmsInfo(filmsInfo))
        },
    [])

    const character_components = charactersInfo.map((character, index) => <Character key={index} name={character.name} id={character.id}/>)
    const film_components = filmsInfo.map((film, index) => <FilmButton key={index} title={film.title} id={film.id}/>)

    return (
        <section>
            <h1>{planetInfo.name}</h1>
            <h2>Films</h2>
            {film_components}
            <h2>Characters</h2>
            {character_components}
        </section>
    )
}