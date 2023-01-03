import React, { useState, useEffect, useRef } from "react";
import CardList from "./Components/CardList/CardList";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState("spider-man");
  const inputRef = useRef(null);
  function handleChange() {
    setSearchField(inputRef.current.value);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=135a2b12&s=${searchField}`
      );
      const data = await response.json();
      setMovies(data.Search);
    }
    fetchData();
  }, [searchField]);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onBlur={handleChange}
        className="search-box"
      />
      <CardList movies={movies} />
    </div>
  );
}

export default App;
