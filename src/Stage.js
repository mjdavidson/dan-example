import React from "react";

function Stage({ stage }) {
  switch (stage) {
    case 1:
      return (
        <div>
          <h1>Stage 1</h1>
        </div>
      );
    case 2:
      return (
        <div>
          <h2>Stage 2</h2>
        </div>
      );
    case 3:
      return (
        <div>
          <h3>Stage 3</h3>
        </div>
      );

    default:
      return (
        <div>
          <h1>Select a stage</h1>
        </div>
      );
  }
}

export default Stage;
