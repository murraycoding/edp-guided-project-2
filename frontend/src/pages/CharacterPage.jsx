import Homeworld from "../components/Homeworld"
import FilmButton from "../components/FilmButton"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function CharacterPage() {
    const params = useParams();
    let id = params.id;

    // [characterInfo, setCharacterInfo] = useState({})

    useEffect(
        () => {
            // fetch request here
            // setcharacterInfo(stuff from fetch request)
            console.log("reached the character page")
        }, 
    [])
    const filmComponents = films.map((film, index) => <FilmButton key={index} name={film.name} />)

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
                {filmComponents}
        </section>
    )
}