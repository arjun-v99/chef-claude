import { ClaudeRecipe } from "../ClaudeRecipe/ClaudeRecipe";
import { IngredientsList } from "../IngredientsList/IngredientsList";
import "./Main.css";
import { useState } from "react";

export default function Main() {
  let [ingrediants, setIngrediant] = useState([]);
  let [recipeRecieved, setRecipeRecieved] = useState(false);

  const ingrediantsListItems = ingrediants.map((ingrediant, index) => (
    <IngredientsList key={index} ingrediant={ingrediant}></IngredientsList>
  ));

  function addIngrediant(formData) {
    const newIngrediant = formData.get("ingrediantName");
    setIngrediant((prev) => [...prev, newIngrediant]);
  }

  function setRecipeRecievedStatus() {
    setRecipeRecieved((prev) => !prev);
  }

  return (
    <main className="main-container">
      <form className="form-container" action={addIngrediant}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingrediant"
          className="form-control"
          name="ingrediantName"
        />
        <button className="btn-primary">Add Ingrediant</button>
      </form>
      {ingrediants.length > 0 && (
        <section>
          <h2>Ingredients on the hand:</h2>
          <ul className="ingredients-list">{ingrediantsListItems}</ul>
          {ingrediants.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <div>
                <button onClick={setRecipeRecievedStatus}>Get a Recipe</button>
              </div>
            </div>
          )}
        </section>
      )}
      {recipeRecieved && <ClaudeRecipe></ClaudeRecipe>}
    </main>
  );
}
