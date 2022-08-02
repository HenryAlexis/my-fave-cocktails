import React from "react";

function Recipe({result})
{
    return <li id={result.id}>
        <p>title: {result.title}</p>
        <p>instructions: {result.instructions}</p>
        <img src={result.image} />
    </li>
}

export default Recipe;