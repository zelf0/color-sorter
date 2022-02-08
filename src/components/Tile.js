import React from 'react';

const Tile = ({color, target, swapTile, index }) => {

    function handleEvent() {
        return function(e) {
            swapTile(e, index); 
        };
    }
   
  return <div onClick = {handleEvent()} style = {{backgroundColor: color}} className = "tile"> 

</div>};

export default Tile;
