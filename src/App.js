import React from 'react';
import './App.css';
import Board from './components/Board'
import { useState, useEffect } from 'react'

function App() {

  const [board, setBoard] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const [height, setHeight] = useState(6);
  const [width, setWidth] = useState(6);
  const [selected, setSelected] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [scrambleNewBoards, setScrambleNewBoards] = useState(true)
  const [lockEdges, setLockEdges] = useState(true)
  const [tileSize, setTileSize] = useState(80 / 6);

  useEffect(() => {
    createNewBoard();
  }, [])
  

  function Color(red, green, blue) {
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
  

  function createNewBoard() {
    let w = width > 1 ? width : 2;
    let h = height > 1 ? height : 2;
    setTileSize((w > 30) ? `${70 / w}vw` : `${40 / w}vw`);
    setGameOver(false);
    let newBoard = [];
    for (let i = 0; i < h; i++) {
      let row = [];
      for (let j = 0; j < w; j++) {
        row.push({})
      }
      newBoard.push(row)
    }
      
                    
    colorCorner(newBoard[0][0]);
    colorCorner(newBoard[0][w - 1]);
    colorCorner(newBoard[h - 1][0]);
    colorCorner(newBoard[h - 1][w - 1]);
    //fill in left and right columns
    for (let i = 1; i < h - 1; i++) {
        newBoard[i][0].target = newBoard[i][0].value = gradientColor(newBoard[0][0], newBoard[h - 1][0], h, i);
        newBoard[i][w - 1].target = newBoard[i][w - 1].value = gradientColor(newBoard[0][w - 1], newBoard[h - 1][w - 1], h, i);
    }
    // fill in rows
    for (let row = 0; row < h; row++) {
      for (let column = 1; column < w - 1; column++) {
        newBoard[row][column].target = newBoard[row][column].value = gradientColor(newBoard[row][0], newBoard[row][w - 1], w, column);
      }
    }
    setBoard(newBoard);
    if (scrambleNewBoards) {
      scramble(newBoard);
    }

  }

  function colorCorner(tile) {
    tile.corner = true;
    tile.target = tile.value = new Color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
  }

  function gradientColor(x, y, length, idx) {
    return new Color(x.value.red + idx * ((y.value.red - x.value.red) / (length - 1)), x.value.green + idx * ((y.value.green - x.value.green) / (length - 1)), x.value.blue + idx * ((y.value.blue - x.value.blue) / (length - 1)))
  } 

  const scramble = (board) => {
    setGameOver(false);
    let newBoard = [...board];
    for (let i = 0; i < 40 * height; i++) {
      let rowOne;
      let columnOne;
      let rowTwo;
      let columnTwo;
      if (lockEdges) {
        rowOne = Math.floor(Math.random() * (height - 2)) + 1;
        columnOne = Math.floor(Math.random() * (width - 2)) + 1;
        rowTwo = Math.floor(Math.random() * (height - 2)) + 1;
        columnTwo = Math.floor(Math.random() * (width - 2)) + 1;
      }
      else {
      rowOne = Math.floor(Math.random() * height);
      columnOne = Math.floor(Math.random() * width);
      rowTwo = Math.floor(Math.random() * height);
      columnTwo = Math.floor(Math.random() * width);
      }
      if (!newBoard[rowOne][columnOne].corner && !newBoard[rowTwo][columnTwo].corner) {
        let temp = newBoard[rowOne][columnOne].value;
        newBoard[rowOne][columnOne].value = newBoard[rowTwo][columnTwo].value;
        newBoard[rowTwo][columnTwo].value = temp;
      }
    }
    setBoard(newBoard);
  }

  const swap = (myTile) => { 
      setSelected([...selected, myTile]);

      let newBoard = [...board];
      if (!newBoard[selected[0].index.row][selected[0].index.column].corner && !newBoard[myTile.index.row][myTile.index.column].corner) {
        let temp = newBoard[selected[0].index.row][selected[0].index.column].value;
        newBoard[selected[0].index.row][selected[0].index.column].value = newBoard[myTile.index.row][myTile.index.column].value;
        newBoard[myTile.index.row][myTile.index.column].value = temp;
      }
      setBoard(newBoard);
      if (checkWin()) {
          win()
      }

  }
  
  const win = () => {
    console.log("you won")
    setGameOver(true);
  }

  const checkWin = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (board[i][j].value.red !== board[i][j].target.red || board[i][j].value.green !== board[i][j].target.green || board[i][j].value.blue !== board[i][j].target.blue) {
          return false;
        }
      }
    }
    return true;
  }

  const swapTile = (e, index) => {
    e.target.classList.add("selected");
    if (selected.length < 1) {
      setSelected([...selected, {index: index, tile: e.target}]);
    }
    else {
      //setSelected([...selected, {index: index, tile: e.target}]);
      setTimeout(() => {
        swap({index: index, tile: e.target});
        e.target.classList.remove("selected");
        selected[0].tile.classList.remove("selected");
        setSelected([]);

      }, 100);

      // selected[0].tile.classList.remove("selected");
      // setSelected([]);
    }
    
  }

  const changeSize = (size) => {
    setHeight(size > 60 ? 60 : size);
    setWidth(size > 120 ? 120 : size);

  }
 



  // function swap(x, y, brd) {
  //   let temp = x;
  //   x = y;
  //   y = temp;
  //   return brd;
  // }

  return (
    <div className="App">
        <h3> Objective: Rearrange the tiles to form a gradient! Swap tiles to move them around the board. Corners are always locked in place and can't be moved.</h3>
        <div className="board-container">
        {gameOver ? <h1> You Solved It! </h1> : <></>}
          <Board tileSize={tileSize} swapTile = {swapTile} board = {board}/>
        </div>
        <button onClick = {createNewBoard}> New Board </button> 
        <button onClick = {() => {scramble(board)}}> Scramble Board </button>
        <div className="inputs">
        <p> Difficulty(size) : </p>
        <input value={width} type = "number" min={2} max={50} onChange={(e) => changeSize(parseInt(e.target.value))}/> 
        <input onChange={(e) =>  setLockEdges(e.target.checked)} checked={lockEdges} type="checkbox" id="lock-edges" name="Lock Edges "/>
        <label for="lock-edges"> Don't Scramble Edge Tiles </label>
        <input onChange={(e) =>  setScrambleNewBoards(e.target.checked)} checked={scrambleNewBoards} type="checkbox"id="scramble-new-boards" name="Automatically Scramble New Boards" />
        <label for="scramble-new-boards"> Automatically Scramble New Boards</label>
        </div>

    </div>
  );


}

export default App;
