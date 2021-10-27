import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

// ou faz uma função aninima, como foi feita aqui ou muda o name da função, para não deixar o nome igual do styled Container
// const Container = () => {
export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};

// export default Container;
