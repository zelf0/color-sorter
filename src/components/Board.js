import React from 'react';

const Board = ({board}) => {
  return <div>
    {board.map((row, i) => 
        <div className = "row" key = {`row-${i}`}> 
        {row.map((tile, j) => 

                <div className = "tile" key = {`tile-${i}-${j}`}> 
                    {tile}
                </div>
        )}
        </div>
    )}

  </div>;
};

export default Board;
