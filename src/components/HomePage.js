import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";

function HomePage()
{
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/drinks")
        .then((r)=>r.json())
        .then((data)=>{
            setRecipes(data);
        })
    },[])
    return <ul>
        {recipes.map(item => {return <Recipe key={item.id} result={item} />})}
    </ul>;
}

export default HomePage;