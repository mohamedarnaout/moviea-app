import React, { useState, useEffect, useRef } from "react";
import CardList from "./Components/CardList/CardList";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState("spider-man");

  let inputRef = useRef(null);
  function handleChange() {
    let inputValue = inputRef.current.value;
    console.log(inputValue.length);

    setSearchField(inputValue);
    console.log(searchField);
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
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        className="search-box"
      />
      <CardList movies={movies} />
    </div>
  );
}

export default App;
