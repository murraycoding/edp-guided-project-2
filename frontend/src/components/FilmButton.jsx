import { Link } from "react-router-dom";

export default function FilmButton(props) {
    return (
        <button>
            <Link to={`/films/${props.id}`}>{props.title}</Link>
        </button>
    )
}