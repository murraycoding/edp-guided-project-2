import Homeworld from "../components/Homeworld"
import FilmButton from "../components/FilmButton"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function CharacterPage() {
    const params = useParams();
    let id = params.id;

    // [characterInfo, setCharacterInfo] = useState({})

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/characters/${id}/films`)
        const films = await response.json()
        console.log(films)
    }, [])
    // const filmComponents = films.map((film, index) => <FilmButton key={index} name={film.name} />)

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