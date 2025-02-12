import React, { useState } from "react";
import { InputContainer } from "./styles";
import { FiSearch } from "react-icons/fi"; // Importa ícone de lupa

function Input({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Digite o nome do usuário no GitHub..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}> 
        <FiSearch size={20} /> {/* Ícone da lupa */}
      </button>
    </InputContainer>
  );
}

export default Input;
