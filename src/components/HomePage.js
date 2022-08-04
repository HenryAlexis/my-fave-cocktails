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
    return <div className="container">
        <div className="row">
        {recipes.map(item => {return <Recipe key={item.id} result={item} save={false} />})}
        </div>
    </div>;
}

export default HomePage;