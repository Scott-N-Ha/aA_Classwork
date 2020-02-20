import React from "react";
import Tile from "./tile.jsx";

const Board = ({ board, update }) => {
  const output = board.grid.map ( (row, idx1) => {
    const rowTiles = row.map ( (tile, idx2) => {
      let classType = "tile not-explored";
      if (tile.flagged) classType = "tile flagged";
      else if (tile.explored) {
        if (tile.bombed) classType = "tile bombed";
        else classType = "tile explored";
      }

      let key = "[" + idx1 + "," + idx2 + "]";
      
      return (
        <div className={classType} key={key}>
          <Tile tile={tile} update={update} />
        </div>
      );
    });

    let tmp = "row_" + idx1;
    return (
      <div className="row" key={tmp}>
        {rowTiles}
      </div>
    );
  });

  return (
    <div className="board">
      {output}
    </div>
  ) 
}

export default Board;