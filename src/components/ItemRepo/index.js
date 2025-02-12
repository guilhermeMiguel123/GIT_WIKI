import React from "react";
import { RepoContainer } from "./styles";

function ItemRepo({ repo }) {
  return (
    <RepoContainer>
      <h2>{repo.name}</h2>
      <p>{repo.description || "Sem descrição disponível"}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        📂 Acessar Repositório
      </a>
    </RepoContainer>
  );
}

export default ItemRepo;
