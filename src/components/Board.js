import React from "react";
import Tile from "./Tile";

const Board = ({ board, swapTile, tileSize }) => {
  return (
    <div>
      {board.map((row, i) => (
        <div className="row" key={`row-${i}`}>
          {row &&
            row.map((tile, j) => (
              <Tile
                size={tileSize}
                index={{ row: i, column: j }}
                swapTile={swapTile}
                target={`rgb(${
                  (tile && tile.target && tile.target.red) || 0
                }, ${(tile && tile.target && tile.target.green) || 0}, ${
                  (tile && tile.target && tile.target.blue) || 0
                })`}
                color={`rgb(${(tile && tile.value && tile.value.red) || 0}, ${
                  (tile && tile.value && tile.value.green) || 0
                }, ${(tile && tile.value && tile.value.blue) || 0})`}
                key={`tile-${i}-${j}`}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
