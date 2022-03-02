import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

{
  /* <Pet name="Princess" animal="dog" breed="Labrador Retriever"/>
<Pet name="Christopher" animal="Rodent" breed="Hamster"/>
<Pet name="Quick" animal="Cat" breed="Mixed Breed"/> */
}
