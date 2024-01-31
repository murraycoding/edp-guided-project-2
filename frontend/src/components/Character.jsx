// import {useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';

export default function Character(props) {
    // props should be name, and id
    return (
        <button>
            <Link to={`/characters/${props.id}`}>{props.name}</Link>
        </button> 
    )
}