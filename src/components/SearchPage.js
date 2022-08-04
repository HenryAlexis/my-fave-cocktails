import React, {useState} from "react";
import Recipe from "./Recipe";

function SearchPage()
{
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s={VALUE}
    const [text,setText] = useState("");
    const [recipes,setRecipes] = useState([]);
    function HandleText(e)
    {
        setText(e.target.value);
    }

    function SearchRecipe()
    {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+text)
        .then((r)=>r.json())
        .then((data)=>{
            if (data.drinks != null)
            {
                const temporal = data.drinks.map(item=>{
                    return {
                        "id": item.idDrink,
                        "title": item.strDrink,
                        "image": item.strDrinkThumb,
                        "instructions": item.strInstructions
                    }
                });
                setRecipes(temporal);
            }
            else
            {
                console.log("Error, please contact admin.");
            }
        })
    }

    function SaveRecipeDB(foundTitle, foundInstructions, foundImage)
    {
        const temporal = {
            "title": foundTitle,
            "image": foundImage,
            "instructions": foundInstructions
        };
        fetch(
            "http://localhost:4000/drinks",
            {
                method: "POST",
                body: JSON.stringify(temporal),
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
        })
    }

    return <div>
        <input type="text" onChange={(e)=>HandleText(e)} />
        <button onClick={SearchRecipe}>Load Recipe</button>
        <ul>
            {recipes.map(item=>{return <Recipe key={item.id} result={item} save={true} handleSave={SaveRecipeDB} />})}
        </ul>
    </div>;
}

export default SearchPage;