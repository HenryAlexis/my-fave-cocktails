import React, {useEffect, useState} from "react";

function SendPage()
{
    const [recipe, setRecipe] = useState({
        title:'',
        instructions: ''
    });

    function onSubmitForm(e)
    {
        e.preventDefault();
        const temp = {
            title: recipe.title,
            instructions: recipe.instructions
        }
        fetch(
            "http://localhost:4000/drinks",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(temp)
            }
        )
        .then(r=>r.json())
        .then((data)=>{
            window.location.reload();
        })
    }

    function SetText(e)
    {
        setRecipe({
           ...recipe,
           [e.target.name]: e.target.value
        });
    }

    return <div>
        <form onSubmit={onSubmitForm}>
            <label>Title</label>
            <input
                value={recipe.title}
                type="text"
                name="title"
                onChange={(e)=>SetText(e)}
                default="Recipe title"
             />
            <br/>
            <label>Instructions</label>
            <textarea
                value={recipe.instructions}
                name="instructions"
                onChange={(e)=>SetText(e)}
            >
            </textarea>
            <br/>
            <button type="submit">Submit Recipe</button>
        </form>
    </div>;
}

export default SendPage;