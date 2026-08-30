import { useState } from "react";
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

export default Search;