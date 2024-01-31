import { useEffect, useState } from "react"

export default function FilmPage({id}) {

    const [characterInfo, setCharacterInfo] = useState({})
    const [films, setFilms] = useState([])

    useEffect(
        () => {
            useEffect(() => {
                fetch(`/api/films/${id}/characters`).then(res => res.json()).then(characterInfo => {setCharacterInfo(characterInfo)})
                fetch(`/api/films/${id}`).then(res => res.json()).then(films => setFilms(films))
            }, [])
        }, 
    []);
    const filmComponents = films.map((film, index) => <FilmButton key={index} name={film.name} />)

    return (
        <section>
        </section>
    )
}