import Homeworld from "../components/Homeworld"
import FilmButton from "../components/FilmButton"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CharacterPage() {
    const params = useParams();
    let id = params.id;

    const [characterInfo, setCharacterInfo] = useState({})
    const [films, setFilms] = useState([])

    useEffect(() => {
            fetch(`/api/characters/${id}/films`).then(res => res.json()).then(films => {setFilms(films)})
            fetch(`/api/characters/${id}`).then(res => res.json()).then(characterInfo => setCharacterInfo(characterInfo))
        }, [])
    // const filmComponents = films.map((film, index) => <FilmButton key={index} name={film.name} />)
        console.log(films)
        console.log(characterInfo)
    /*
    return (
        <section>
            <h1>{name}</h1>
            <div className="character-info-section">
                <div className="character-info">Height: {height}cm</div>
                <div className="character-info">Mass: {mass}kg</div>
                <div className="character-info">Born: {birthdate}BBY</div>
            </div>
            <h2>Homeworld</h2>
                <Homeworld name={homeworld} />
            <h2>Films Appeared In</h2>
        </section>
    )
    */

    return (<p>This is a test</p>)
}