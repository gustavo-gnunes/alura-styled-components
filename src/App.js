import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
