import React from 'react';
import './App.css';
import Board from './components/Board'
import { useState } from 'react'

function App() {

  const [board, setBoard] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const [height, setHeight] = useState(10);
  const [width, setWidth] = useState(10);
  const [selected, setSelected] = useState([]);

  function Color(red, green, blue) {
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
  

  function createNewBoard(widthInput, heightInput) {
    setWidth(widthInput);
    setHeight(heightInput);
    let newBoard = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push({})
      }
      newBoard.push(row)
    }
      
                    
    colorCorner(newBoard[0][0]);
    colorCorner(newBoard[0][width - 1]);
    colorCorner(newBoard[height - 1][0]);
    colorCorner(newBoard[height - 1][width - 1]);
    //fill in left and right columns
    for (let i = 1; i < height - 1; i++) {
        newBoard[i][0].target = newBoard[i][0].value = gradientColor(newBoard[0][0], newBoard[height - 1][0], height, i);
        newBoard[i][width - 1].target = newBoard[i][width - 1].value = gradientColor(newBoard[0][width - 1], newBoard[height - 1][width - 1], height, i);
    }
    // fill in rows
    for (let row = 0; row < height; row++) {
      for (let column = 1; column < width - 1; column++) {
        newBoard[row][column].target = newBoard[row][column].value = gradientColor(newBoard[row][0], newBoard[row][width - 1], width, column);
      }
    }
    setBoard(newBoard);

  }

  function colorCorner(tile) {
    tile.corner = true;
    tile.target = tile.value = new Color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
  }

  function gradientColor(x, y, length, idx) {
    return new Color(x.value.red + idx * ((y.value.red - x.value.red) / (length - 1)), x.value.green + idx * ((y.value.green - x.value.green) / (length - 1)), x.value.blue + idx * ((y.value.blue - x.value.blue) / (length - 1)))
  } 

  const shuffle = () => {
    let newBoard = [...board];
    for (let i = 0; i < 40; i++) {
      let rowOne = Math.floor(Math.random() * height);
      let columnOne = Math.floor(Math.random() * width);
      let rowTwo = Math.floor(Math.random() * height);
      let columnTwo = Math.floor(Math.random() * width);
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
 



  // function swap(x, y, brd) {
  //   let temp = x;
  //   x = y;
  //   y = temp;
  //   return brd;
  // }

  return (
    <div className="App">
        <Board swapTile = {swapTile} board = {board}/>
        <input type = "text"/> 
        <button onClick = {() => createNewBoard(10, 10)}> New Board </button> 
        <button onClick = {() => {shuffle()}}> Shuffle </button>
    </div>
  );
}

export default App;
