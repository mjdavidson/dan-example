import React, { useState } from "react";
import Stage from "./Stage";
function App() {
  const [stage, setStage] = useState(null);
  const changeStage = e => {
    setStage(Number(e.target.value));
  };
  return (
    <div>
      <label htmlFor="select">
        Select a stage{" "}
        <select id="select" onChange={changeStage}>
          <option> </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <Stage stage={stage} />
    </div>
  );
}

export default App;
