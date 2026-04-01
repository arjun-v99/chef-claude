import "./ClaudeRecipe.css";
import Markdown from "react-markdown";
export function ClaudeRecipe({ aiResponse }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <Markdown>{aiResponse}</Markdown>
    </section>
  );
}
