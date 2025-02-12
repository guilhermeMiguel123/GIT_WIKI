import styled from "styled-components";

export const RepoContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Espaçamento entre os cards */
  background: rgb(255, 255, 255);
  padding: 16px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
     color: #000;
  }

  p {
    font-size: 14px;
    color: #000;
    margin-bottom: 12px;
  }

  a {
    display: inline-block;
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    text-decoration: none;
  }

  a:hover {
    background: #0056b3;
  }
  `
  export const Card = styled.div`
  flex: 1 0 200px; /* Cada card terá pelo menos 200px de largura */
  background: rgb(240, 240, 240);
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
`
;
