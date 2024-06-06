import React, { useState } from "react";
import Mole from "./Mole";

function MoleContainer(props) {

    const [displayMole, setDisplayMole] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleBopMole = () => {
      setScore(score + 1);
      setDisplayMole(false);
    };
  
    const componentToRender = displayMole ? <Mole onBop={handleBopMole} /> : <EmptySlot />;
  
    return (
      <div>
        {componentToRender}
      </div>
    );
  }
  
  export default MoleContainer;
  