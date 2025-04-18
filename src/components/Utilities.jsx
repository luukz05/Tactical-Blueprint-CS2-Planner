// import react from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRef } from "react";

const Modelo = styled.div`
  background-color: #526d82;
  height: auto;
  min-width: 260px;
  max-width: 260px;
  height: 89vh;
  &:hover {
    cursor: auto;
  }
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px;

  justify-content: space-evenly;
  justify-self: end;
  align-items: center;
  /* background-color:#9DB2BF;
    border-radius:12px; */
`;

const Divisao = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
`;
const DivisaoNomes = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex-wrap: wrap;
`;
export default function ToolBarUtilities() {
  const molotovRef1 = useRef(null);
  const molotovRef2 = useRef(null);
  const molotovRef3 = useRef(null);
  const molotovRef4 = useRef(null);
  const molotovRef5 = useRef(null);

  const flashRef2 = useRef(null);
  const flashRef3 = useRef(null);
  const flashRef4 = useRef(null);
  const flashRef5 = useRef(null);
  const flashRef1 = useRef(null);

  const heRef1 = useRef(null);
  const heRef2 = useRef(null);
  const heRef3 = useRef(null);
  const heRef4 = useRef(null);
  const heRef5 = useRef(null);

  const decoyRef1 = useRef(null);
  const decoyRef2 = useRef(null);
  const decoyRef3 = useRef(null);
  const decoyRef4 = useRef(null);
  const decoyRef5 = useRef(null);

  const smokeRef1 = useRef(null);
  const smokeRef2 = useRef(null);
  const smokeRef3 = useRef(null);
  const smokeRef4 = useRef(null);
  const smokeRef5 = useRef(null);

  const defuseRef1 = useRef(null);
  const defuseRef2 = useRef(null);
  const defuseRef3 = useRef(null);
  const defuseRef4 = useRef(null);
  const defuseRef5 = useRef(null);

  const nickRef1 = useRef(null);
  const nickRef2 = useRef(null);
  const nickRef3 = useRef(null);
  const nickRef4 = useRef(null);
  const nickRef5 = useRef(null);

  const c4Ref5 = useRef(null);

  return (
    <>
      <Modelo className="ToolBar">
        <div className="Draggables">
          <Container>
            <Divisao>
              <Draggable nodeRef={molotovRef1}>
                <div ref={molotovRef1} className="Molotov"></div>
              </Draggable>
              <Draggable nodeRef={molotovRef2}>
                <div ref={molotovRef2} className="Molotov"></div>
              </Draggable>
              <Draggable nodeRef={molotovRef3}>
                <div ref={molotovRef3} className="Molotov"></div>
              </Draggable>
              <Draggable nodeRef={molotovRef4}>
                <div ref={molotovRef4} className="Molotov"></div>
              </Draggable>
              <Draggable nodeRef={molotovRef5}>
                <div ref={molotovRef5} className="Molotov"></div>
              </Draggable>
            </Divisao>
          </Container>
          <Divisao>
            <Draggable nodeRef={flashRef1}>
              <div ref={flashRef1} className="Flash"></div>
            </Draggable>
            <Draggable nodeRef={flashRef2}>
              <div ref={flashRef2} className="Flash"></div>
            </Draggable>
            <Draggable nodeRef={flashRef3}>
              <div ref={flashRef3} className="Flash"></div>
            </Draggable>
            <Draggable nodeRef={flashRef4}>
              <div ref={flashRef4} className="Flash"></div>
            </Draggable>
            <Draggable nodeRef={flashRef5}>
              <div ref={flashRef5} className="Flash"></div>
            </Draggable>
          </Divisao>
          <Divisao>
            <Draggable nodeRef={heRef1}>
              <div ref={heRef1} className="HE"></div>
            </Draggable>
            <Draggable nodeRef={heRef2}>
              <div ref={heRef2} className="HE"></div>
            </Draggable>
            <Draggable nodeRef={heRef3}>
              <div ref={heRef3} className="HE"></div>
            </Draggable>
            <Draggable nodeRef={heRef4}>
              <div ref={heRef4} className="HE"></div>
            </Draggable>
            <Draggable nodeRef={heRef5}>
              <div ref={heRef5} className="HE"></div>
            </Draggable>
          </Divisao>
          <Divisao>
            <Draggable nodeRef={decoyRef1}>
              <div ref={decoyRef1} className="Decoy"></div>
            </Draggable>
            <Draggable nodeRef={decoyRef2}>
              <div ref={decoyRef2} className="Decoy"></div>
            </Draggable>
            <Draggable nodeRef={decoyRef3}>
              <div ref={decoyRef3} className="Decoy"></div>
            </Draggable>
            <Draggable nodeRef={decoyRef4}>
              <div ref={decoyRef4} className="Decoy"></div>
            </Draggable>
            <Draggable nodeRef={decoyRef5}>
              <div ref={decoyRef5} className="Decoy"></div>
            </Draggable>
          </Divisao>
          <Divisao>
            <Draggable nodeRef={smokeRef1}>
              <div ref={smokeRef1} className="Smoke"></div>
            </Draggable>
            <Draggable nodeRef={smokeRef2}>
              <div ref={smokeRef2} className="Smoke"></div>
            </Draggable>
            <Draggable nodeRef={smokeRef3}>
              <div ref={smokeRef3} className="Smoke"></div>
            </Draggable>
            <Draggable nodeRef={smokeRef4}>
              <div ref={smokeRef4} className="Smoke"></div>
            </Draggable>
            <Draggable nodeRef={smokeRef5}>
              <div ref={smokeRef5} className="Smoke"></div>
            </Draggable>
          </Divisao>
          <Divisao>
            <Draggable nodeRef={defuseRef1}>
              <div ref={defuseRef1} className="Defuse"></div>
            </Draggable>
            <Draggable nodeRef={defuseRef2}>
              <div ref={defuseRef2} className="Defuse"></div>
            </Draggable>
            <Draggable nodeRef={defuseRef3}>
              <div ref={defuseRef3} className="Defuse"></div>
            </Draggable>
            <Draggable nodeRef={defuseRef4}>
              <div ref={defuseRef4} className="Defuse"></div>
            </Draggable>
            <Draggable nodeRef={defuseRef5}>
              <div ref={defuseRef5} className="Defuse"></div>
            </Draggable>
          </Divisao>
          <Divisao>
            <Draggable nodeRef={c4Ref5}>
              <div ref={c4Ref5} className="C4"></div>
            </Draggable>
          </Divisao>
          <DivisaoNomes>
            <Draggable nodeRef={nickRef1}>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                  ref={nickRef1}
                ></input>
              </Container>
            </Draggable>
            <Draggable nodeRef={nickRef2}>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                  ref={nickRef2}
                ></input>
              </Container>
            </Draggable>
            <Draggable nodeRef={nickRef3}>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                  ref={nickRef3}
                ></input>
              </Container>
            </Draggable>
            <Draggable nodeRef={nickRef4}>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                  ref={nickRef4}
                ></input>
              </Container>
            </Draggable>
            <Draggable nodeRef={nickRef5}>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                  ref={nickRef5}
                ></input>
              </Container>
            </Draggable>
          </DivisaoNomes>
        </div>
      </Modelo>
    </>
  );
}
