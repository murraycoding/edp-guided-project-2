import { Link } from "react-router-dom";

export default function PlanetButton(props) {
    return (
        <button>
            <Link to={`/planets/${props.id}`}>{props.title}</Link>
        </button>
    )
}