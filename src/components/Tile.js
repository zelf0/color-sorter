import React from 'react';

const Tile = ({color, target, swapTile, index, size }) => {

    function handleEvent() {
        return function(e) {
            swapTile(e, index); 
        };
    }
   
  return <div onClick = {handleEvent()} style = {{backgroundColor: color, height: size, width: size}} className = "tile"> 
</div>};

export default Tile;
