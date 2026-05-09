import { getRecipeFromChefClaude } from "../../../ai";
import { ClaudeRecipe } from "../ClaudeRecipe/ClaudeRecipe";
import { IngredientsList } from "../IngredientsList/IngredientsList";
import "./Main.css";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  let [ingrediants, setIngrediant] = useState([]);
  let [recipe, setRecipe] = useState("");
  const recipeCta = useRef(null);

  function addIngrediant(formData) {
    const newIngrediant = formData.get("ingrediantName");
    setIngrediant((prev) => [...prev, newIngrediant]);
  }

  async function getRecipe() {
    const recipeMarkDown = await getRecipeFromChefClaude(ingrediants);
    setRecipe((prev) => recipeMarkDown);
  }

  useEffect(() => {
    if (recipe && recipeCta.current) {
      recipeCta.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

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
          getRecipe={getRecipe}
          ref={recipeCta}
        />
      )}
      {recipe && <ClaudeRecipe aiResponse={recipe}></ClaudeRecipe>}
    </main>
  );
}
