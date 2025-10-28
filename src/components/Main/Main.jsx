import "./Main.css";

export default function Main() {
  return (
    <main className="main-container">
      <form className="form-container">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingrediant"
          className="form-control"
        />
        <button className="btn-primary">Add Ingrediant</button>
      </form>
    </main>
  );
}
