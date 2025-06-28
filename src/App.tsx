import './App.css';
import { useState } from 'react';
import { knightMinMovesBidirectional } from './knightMovesCGPT';
import { createBox } from './knightMoves';
import { useEffect } from "react";
//import {knightMinMoves} from './knightMoves';

function App() {
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [endX, setEndX] = useState<number>(0);
  const [endY, setEndY] = useState<number>(0);
  const [boardSize, setBoardSize] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [westBoundary, setWestBoundary] = useState<number>(0);
  const [eastBoundary, setEastBoundary] = useState<number>(0);
  const [northBoundary, setNorthBoundary] = useState<number>(0);
  const [southBoundary, setSouthBoundary] = useState<number>(0);

    /*useEffect(() => {
      createBox(startX, startY, endX, endY, boardSize, setWestBoundary, setEastBoundary, setNorthBoundary, setSouthBoundary);
    }, []);*/

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add knight move logic here
    console.log(`From (${startX}, ${startY}) to (${endX}, ${endY}) on a ${boardSize}x${boardSize} board`);
    createBox(startX, startY, endX, endY, boardSize, setWestBoundary, setEastBoundary, setNorthBoundary, setSouthBoundary);
    setMoves(knightMinMovesBidirectional(
    [startX, startY],
    [endX, endY],
    boardSize
  ));
  
  //alert(`Minimum knight moves: ${moves}`);
  };

  useEffect(() =>{
    console.log("Boundary: ", [westBoundary, northBoundary, eastBoundary, southBoundary]);
  }, [westBoundary, eastBoundary, southBoundary, northBoundary]);
  
  return (
    <div className="container">
      <h1>Knight Moves Calculator</h1>
      <p>
        This program calculates the <strong>minimum number of moves</strong> a knight (horse) needs
        to travel from a start position to an end position on an <strong>n×n chessboard</strong>.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Start X:
            <input type="number" value={startX} onChange={(e) => setStartX(parseInt(e.target.value))} required />
          </label>
          <label>
            Start Y:
            <input type="number" value={startY} onChange={(e) => setStartY(parseInt(e.target.value))} required />
          </label>
          <label>
            End X:
            <input type="number" value={endX} onChange={(e) => setEndX(parseInt(e.target.value))} required />
          </label>
          <label>
            End Y:
            <input type="number" value={endY} onChange={(e) => setEndY(parseInt(e.target.value))} required />
          </label>
          <label>
            Board Size (n×n):
            <input
              type="number"
              value={boardSize}
              min={1}
              onChange={(e) => setBoardSize(parseInt(e.target.value))}
              required
            />
          </label>
          <label>
            Minimum Knight Moves:
            <input
              type="number"
              value={moves}
              onChange={(e) => setMoves(parseInt(e.target.value))}
            //<br id="funny"></br>
            />
          </label>
        </div>
        <button type="submit">Calculate Moves</button>
      </form>
    </div>
  );
}

export default App;