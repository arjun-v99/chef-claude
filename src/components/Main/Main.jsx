import { ClaudeRecipe } from "../ClaudeRecipe/ClaudeRecipe";
import { IngredientsList } from "../IngredientsList/IngredientsList";
import "./Main.css";
import { useState } from "react";

export default function Main() {
  let [ingrediants, setIngrediant] = useState([]);
  let [recipeRecieved, setRecipeRecieved] = useState(false);

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
        <IngredientsList
          ingrediants={ingrediants}
          setRecipeRecievedStatus={setRecipeRecievedStatus}
        />
      )}
      {recipeRecieved && <ClaudeRecipe></ClaudeRecipe>}
    </main>
  );
}
