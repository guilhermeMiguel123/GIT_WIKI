import React, { useState } from "react";
import logogit from "../assets/github.png";
import Input from "../components/input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastQuery, setLastQuery] = useState("");

  const fetchRepositories = async (query, page = 1) => {
    console.log("Buscando repositórios para:", query);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=10&page=${page}`
      );
  
      if (!response.ok) throw new Error("Erro ao buscar repositórios");
  
      const data = await response.json();
      console.log("Repositórios recebidos:", data.items);
      setRepos(data.items);
      setCurrentPage(page);
      setLastQuery(query);
    } catch (error) {
      console.error(error);
      setRepos([]);
    }
  };

  const nextPage = () => {
    fetchRepositories(lastQuery, currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchRepositories(lastQuery, currentPage - 1);
    }
  };

  return (
    <Container>
      <h3>
      <hr/>
        GIT
      </h3>
      <img src={logogit} width={72} height={72} alt="GitHub Logo" />
      <h3>
        WIKI
        <hr/>
      </h3>
      <br/>
      <br/>
      <br/>
      {!repos.length ? (
        <Input onSearch={fetchRepositories} />
      ) : (
        <>
          <button onClick={() => setRepos([])}>🔙 Nova Pesquisa</button>
          {repos.map((repo) => (
            <ItemRepo key={repo.id} repo={repo} />
          ))}
          <div>
            <button onClick={prevPage} disabled={currentPage === 1}>
              ⬅️ Anterior
            </button>
            <span>Página {currentPage}</span>
            <button onClick={nextPage}>Próxima ➡️</button>
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
