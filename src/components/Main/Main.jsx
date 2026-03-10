import "./Main.css";
import { useState } from "react";

export default function Main() {
  const ingrediants = [];
  const ingrediantsListItems = ingrediants.map((ingrediant) => (
    <li key={ingrediant}>{ingrediant}</li>
  ));

  function addIngrediant(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngrediant = formData.get("ingrediantName");
    ingrediants.push(newIngrediant);
  }

  return (
    <main className="main-container">
      <form className="form-container" onSubmit={addIngrediant}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingrediant"
          className="form-control"
          name="ingrediantName"
        />
        <button className="btn-primary">Add Ingrediant</button>
      </form>
      <ul>{ingrediantsListItems}</ul>
    </main>
  );
}
