import React from 'react';
import Tile from './Tile';

const Board = ({board, swapTile}) => {
  return <div>
    {board.map((row, i) => 
        <div className = "row" key = {`row-${i}`}> 
        {row?.map((tile, j) => 

                // <div style = {{backgroundColor: `rgb(${tile.red}, ${tile.green}, ${tile.blue})`}} className = "tile" key = {`tile-${i}-${j}`}> 
                //     {/* {`rgb(${tile.red}, ${tile.green}, ${tile.blue})`} */}
                // </div>
                <Tile index = {{row: i, column: j}} swapTile = {swapTile} target = {`rgb(${tile?.target?.red}, ${tile?.target?.green}, ${tile?.target?.blue})`} color = {`rgb(${tile?.value?.red}, ${tile?.value?.green}, ${tile?.value?.blue})`} key = {`tile-${i}-${j}`}/>
        )}
        </div>
    )}

  </div>;
};

export default Board;
