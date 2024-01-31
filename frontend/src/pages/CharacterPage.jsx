import Homeworld from "../components/Homeworld"
import FilmButton from "../components/FilmButton"

export default function CharacterPage(
    {name, height, mass, birthdate, homeworld, films}
) {

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