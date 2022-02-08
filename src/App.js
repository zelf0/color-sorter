// import react from 'react';
import './App.css';
import Board from './components/Board'
import { useState } from 'react'

function App() {

  const [board, setBoard] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const [height, setHeight] = useState(10);
  const [width, setWidth] = useState(10);

  function Color(red, green, blue) {
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
  

  function createNewBoard() {
    let newBoard = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push({})
      }
      newBoard.push(row)
    }
      
                    
    randomColor(newBoard[0][0]);
    randomColor(newBoard[0][width - 1]);
    randomColor(newBoard[height - 1][0]);
    randomColor(newBoard[height - 1][width - 1]);
    //fill in left and right columns
    for (let i = 1; i < height - 1; i++) {
        newBoard[i][0].target = newBoard[i][0].value = gradientColor(newBoard[0][0], newBoard[height - 1][0], height, i);
        newBoard[i][width - 1].target = newBoard[i][width - 1].value = gradientColor(newBoard[0][width - 1], newBoard[height - 1][width - 1], height, i);
    }
    // fill in rows
    for (let row = 0; row < height; row++) {
      for (let column = 1; column < height - 1; column++) {
        newBoard[row][column].target = newBoard[row][column].value = gradientColor(newBoard[row][0], newBoard[row][width - 1], width, column);
      }
    }
    setBoard(newBoard);

  }

  function randomColor(tile) {
    // return {red: Math.floor(Math.random() * 255), 
    //   green: Math.floor(Math.random() * 255),
    //   blue: Math.floor(Math.random() * 255)}
    tile.target = tile.value = new Color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
  }

  function gradientColor(x, y, length, idx) {
    // return {
    //   red: x.red + idx * ((y.red - x.red) / (length - 1)),
    //   green:x.green + idx * ((y.green - x.green) / (length - 1)),
    //   blue:x.blue + idx * ((y.blue - x.blue) / (length - 1))
    // }
    return new Color(x.value.red + idx * ((y.value.red - x.value.red) / (length - 1)), x.value.green + idx * ((y.value.green - x.value.green) / (length - 1)), x.value.blue + idx * ((y.value.blue - x.value.blue) / (length - 1)))
  }

  function shuffle() {
    for (let i = 0; i < 10; i++) {
      let newBoard = board;
      let a = newBoard[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)].value
      let b = newBoard[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)].value
      
      setBoard(swap(a, b, newBoard))
    }
  }

 



  function swap(x, y, brd) {
    let temp = x;
    x = y;
    y = temp;
    return brd;
  }

  return (
    <div className="App">
        <Board board = {board}/>
        <button onClick = {createNewBoard}> New Board </button> 
        <button onClick = {shuffle}> Shuffle </button>
    </div>
  );
}

export default App;
