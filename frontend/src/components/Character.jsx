// import {useState, useEffect } from "react";

export default function Character(props) {
    return (
        <button className = "Character"
        // onClick = {() => {
            // fetch request here for character stuff
        //}}
        >
            {props.name}
        </button>
    )
}