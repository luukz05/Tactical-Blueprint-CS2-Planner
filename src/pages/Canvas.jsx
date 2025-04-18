import React, { useState } from "react";
import styled from "styled-components";
// import Draggable from "react-draggable";
// import { TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';

import Quadro from "../components/Quadro";
import NavBar from "../components/NavBar";
import ToolBar from "../components/ToolBar";
import ToolBarUtilities from "../components/Utilities";

// import Image from "../components/Image";

const Modelo = styled.div`
  overflow: hidden;
`;

const ModeloConteudo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  color: #eee;
`;
export default function Canvas() {
  //  const [espessura,setEspessura] useState() // pra fazer a espessura e etc
  const [ImagemFundo, setImagemFundo] = useState("./placeholder.png");
  const [Linha, setLinha] = useState("round");
  const [Cor, setCor] = useState("#ffffff");
  const [Espessura, setEspessura] = useState("2");

  return (
    <Modelo>
      <NavBar setImagemFundo={setImagemFundo} />
      <ModeloConteudo>
        <ToolBar
          setLinha={setLinha}
          setCor={setCor}
          Cor={Cor}
          setEspessura={setEspessura}
          Espessura={Espessura}
        />
        <Quadro
          className="Canvas"
          ImagemFundo={ImagemFundo}
          styled={{ ZIndex: -100 }}
          Cor={Cor}
          Linha={Linha}
          Espessura={Espessura}
        />
        <ToolBarUtilities />
      </ModeloConteudo>
    </Modelo>
  );
}
