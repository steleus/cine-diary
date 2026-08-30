{/*import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <h1>Film & Dizi Ara</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <p>Aranan: {searchTerm}</p>
    </main>
  );
}

export default Search; */}

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const url = searchTerm
    ? `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchTerm}`
    : "";

  const { data, loading, error } = useFetch(url);

  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <main>
      <h1>Film & Dizi Ara</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <p>Aranan: {searchTerm}</p>
    </main>
  );
}

export default Search;