import React from "react";

function Recipe({result, save, handleSave})
{
    function SaveRecipe()
    {
        handleSave(result.title, result.instructions, result.image);
    }

    return <div id={result.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
        <div className="panel panel-success">
            <p className="panel-heading">title: {result.title}</p>
            <div className="panel-body">
                <p>instructions: {result.instructions}</p>
                <img src={result.image} className="RecipeImage" />
                {save ? <button className="btn btn-lg btn-default" onClick={SaveRecipe}>Save Recipe</button> : ""}
            </div>
        </div>
    </div>
}

export default Recipe;