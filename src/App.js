import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

{/* <Pet name="Princess" animal="dog" breed="Labrador Retriever"/>
<Pet name="Christopher" animal="Rodent" breed="Hamster"/>
<Pet name="Quick" animal="Cat" breed="Mixed Breed"/> */}