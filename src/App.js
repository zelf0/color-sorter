// import react from 'react';
import './App.css';
import Board from './components/Board'
// import { useState } from 'react'

function App() {

  //const [board, setBoard] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

  return (
    <div className="App">
        <Board board = {board}/>
    </div>
  );
}

export default App;
