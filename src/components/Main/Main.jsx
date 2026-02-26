import "./Main.css";

export default function Main() {
  function handleBtnClick() {
    console.log("Clicked");
  }
  return (
    <main className="main-container">
      <form className="form-container">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingrediant"
          className="form-control"
        />
        <button type="button" className="btn-primary" onClick={handleBtnClick}>
          Add Ingrediant
        </button>
      </form>
    </main>
  );
}
