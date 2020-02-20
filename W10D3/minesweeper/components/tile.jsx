import React from 'react';

const Tile = ({tile, update}) => {
  let text = " ";

  if (tile.flagged) text = "🏁";
  else if (tile.explored) {
    if (tile.bombed) text = "💣";
    else {
      let numBombs = tile.adjacentBombCount();
      if (numBombs !== 0) text = numBombs.toString();
    }
  }

  function handleClick() {
    if (event.altKey) {
      return update(tile, true);
    } else {
      return update(tile, false);
    }

  }

  return (
    <div className="tile-text" onClick={handleClick}>
      {text}
    </div>
  );
};

export default Tile;