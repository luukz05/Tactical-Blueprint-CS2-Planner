// import react from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

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
  return (
    <>
      <Modelo className="ToolBar">
        <div className="Draggables">
          <Container>
            <Divisao>
              <Draggable>
                <div className="Molotov"></div>
              </Draggable>
              <Draggable>
                <div className="Molotov"></div>
              </Draggable>
              <Draggable>
                <div className="Molotov"></div>
              </Draggable>
              <Draggable>
                <div className="Molotov"></div>
              </Draggable>
              <Draggable>
                <div className="Molotov"></div>
              </Draggable>
            </Divisao>

            <Divisao>
              <Draggable>
                <div className="Flash"></div>
              </Draggable>
              <Draggable>
                <div className="Flash"></div>
              </Draggable>
              <Draggable>
                <div className="Flash"></div>
              </Draggable>
              <Draggable>
                <div className="Flash"></div>
              </Draggable>
              <Draggable>
                <div className="Flash"></div>
              </Draggable>
            </Divisao>

            <Divisao>
              <Draggable>
                <div className="HE"></div>
              </Draggable>
              <Draggable>
                <div className="HE"></div>
              </Draggable>
              <Draggable>
                <div className="HE"></div>
              </Draggable>
              <Draggable>
                <div className="HE"></div>
              </Draggable>
              <Draggable>
                <div className="HE"></div>
              </Draggable>
            </Divisao>

            <Divisao>
              <Draggable>
                <div className="Decoy"></div>
              </Draggable>
              <Draggable>
                <div className="Decoy"></div>
              </Draggable>
              <Draggable>
                <div className="Decoy"></div>
              </Draggable>
              <Draggable>
                <div className="Decoy"></div>
              </Draggable>
              <Draggable>
                <div className="Decoy"></div>
              </Draggable>
            </Divisao>

            <Divisao>
              <Draggable>
                <div className="Smoke"></div>
              </Draggable>
              <Draggable>
                <div className="Smoke"></div>
              </Draggable>
              <Draggable>
                <div className="Smoke"></div>
              </Draggable>
              <Draggable>
                <div className="Smoke"></div>
              </Draggable>
              <Draggable>
                <div className="Smoke"></div>
              </Draggable>
            </Divisao>

            <Divisao>
              <Draggable>
                <div className="Defuse"></div>
              </Draggable>
              <Draggable>
                <div className="Defuse"></div>
              </Draggable>
              <Draggable>
                <div className="Defuse"></div>
              </Draggable>
              <Draggable>
                <div className="Defuse"></div>
              </Draggable>
              <Draggable>
                <div className="Defuse"></div>
              </Draggable>
            </Divisao>
          </Container>
          <Divisao>
            <Draggable>
              <div className="C4"></div>
            </Draggable>
          </Divisao>

          <DivisaoNomes>
            <Draggable>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                ></input>
              </Container>
            </Draggable>
            <Draggable>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                ></input>
              </Container>
            </Draggable>
            <Draggable>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                ></input>
              </Container>
            </Draggable>
            <Draggable>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                ></input>
              </Container>
            </Draggable>
            <Draggable>
              <Container className="ContainerTexto">
                <input
                  className="TextoDraggable"
                  maxLength={15}
                  placeholder="NICKNAME"
                ></input>
              </Container>
            </Draggable>
          </DivisaoNomes>
        </div>
      </Modelo>
    </>
  );
}
