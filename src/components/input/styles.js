import styled from "styled-components";

export const InputContainer = styled.div`

 
   

    input{
        background: transparent;
        border:0;
        width:100%;
        height: 42px;
        passing:0 20px;
        color:#fafafa;
        font-size:20px;
         border:1px solid #fafafa;
          border-radius:20px;

   

    margin:20px;
    }


    display: flex;
  align-items: center;
  gap: 8px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background:rgb(0, 0, 0);
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  button:hover {
    background:rgb(62, 62, 62);
  }
`;