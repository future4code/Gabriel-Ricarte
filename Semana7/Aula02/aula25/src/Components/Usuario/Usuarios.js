import React from 'react';
import styled from 'styled-components';
import Lista from "../Lista/Lista"

const DeleteButton = styled.p`
  color: red;
  background-color: black;
  max-width: 10px;
`

const Maindiv02 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

function Usuarios(props) {
    return (
        <Maindiv02>
            <p>{props.username}</p>
            <p></p>
            <DeleteButton onClick={() => props.deleteUsuario}>X</DeleteButton>
        </Maindiv02>
    )
}

export default Usuarios;