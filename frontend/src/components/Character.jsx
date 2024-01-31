// import {useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Character(props) {
    // props should be name, and id
    return (
        <button className = "Character">
        <Link to={`characters/${props.id}`} />
            {props.name}
        </button>
    )
}