import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.input`
  width: 62.8vw;
  background-color: #213044;
  font-family: "Montserrat", sans-serif;
  color: #eee;
  font-size: 15px;
  display: block;
  border: none;
  transition: 1s;
  /* text-align: center; */
  text-indent: 10px;
  z-index: 999;
  &:hover {
    background-color: #40546e;
    transition: 1s;
    cursor: pointer;
  }
`;

const BotaoFunc = styled.button`
  font-family: "Montserrat", sans-serif;
  height: 5vh;
  width: 7vh;
  color: #dde6ed;
  border: none;
  outline: inherit;
  /* border-radius:5px; */
  font-weight: bold;
  transition: 1s;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Quadro({ ImagemFundo, Cor, Linha, Espessura }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  // eslint-disable-next-line
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const { clientX, clientY } = e;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setLines((prevLines) => [
      ...prevLines,
      { points: [{ x, y }], Cor, Linha, Espessura },
    ]);
    setRedoHistory([]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setHistory((prevHistory) => [...prevHistory, lines]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const { clientX, clientY } = e;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setLines((prevLines) => {
      const lastLine = prevLines[prevLines.length - 1];
      const newPoint = { x, y };
      const updatedLine = {
        ...lastLine,
        points: [...lastLine.points, newPoint],
      };
      const updatedLines = [...prevLines.slice(0, -1), updatedLine];

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updatedLines.forEach((line) => {
        const { points, Cor, Linha, Espessura } = line;
        ctx.strokeStyle = Cor;
        ctx.lineJoin = Linha;
        ctx.lineCap = Linha;
        ctx.lineWidth = Espessura;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach((point) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      });

      return updatedLines;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = 571;

    const ctx = canvas.getContext("2d");
    ctx.lineJoin = Linha;
    ctx.lineCap = Linha;
    ctx.lineWidth = Espessura;

    lines.forEach((line) => {
      const { points, Cor, Linha, Espessura } = line;
      ctx.strokeStyle = Cor;
      ctx.lineJoin = Linha;
      ctx.lineCap = Linha;
      ctx.lineWidth = Espessura;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
  }, [lines, Cor, Espessura, Linha]);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setLines([]);
    setHistory([]);
    setRedoHistory([]);
  };

  const handleUndo = () => {
    const lastLine = lines[lines.length - 1];
    setRedoHistory((prevRedoHistory) => [...prevRedoHistory, lastLine]);
    setLines(lines.slice(0, -1));
  };

  const handleRedo = () => {
    if (redoHistory.length === 0) {
      // Show a message if there are no lines to redo
      alert("All lines redone.");
      return;
    }
    const lastRedoLine = redoHistory[redoHistory.length - 1];
    setLines((prevLines) => [...prevLines, lastRedoLine]);
    setRedoHistory(redoHistory.slice(0, -1));
  };

  return (
    <>
      <div className="" style={{ display: "flex", flexDirection: "column" }}>
        <div className="" style={{ display: "flex" }}>
          <Title
            type="text"
            placeholder="Title"
            className="TituloCanvas"
          ></Title>
          <BotaoFunc
            onClick={handleClearCanvas}
            style={{ backgroundColor: "#526D82" }}
          >
            CLEAR
          </BotaoFunc>
          <BotaoFunc
            onClick={handleUndo}
            style={{ backgroundColor: "#89a5b6" }}
          >
            UNDO
          </BotaoFunc>
          <BotaoFunc
            onClick={handleRedo}
            style={{ backgroundColor: "#9DB2BF" }}
          >
            REDO
          </BotaoFunc>
        </div>
        <canvas
          ref={canvasRef}
          style={{
            backgroundImage: `url(${ImagemFundo})`,
            cursor: "crosshair",
            marginTop: "7vh",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        ></canvas>
      </div>
    </>
  );
}
