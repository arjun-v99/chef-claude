export function IngredientsList({ ingrediants, getRecipe }) {
  const ingrediantsListItems = ingrediants.map((ingrediant) => (
    <li>{ingrediant}</li>
  ));
  return (
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
            <button onClick={getRecipe}>Get a Recipe</button>
          </div>
        </div>
      )}
    </section>
  );
}
