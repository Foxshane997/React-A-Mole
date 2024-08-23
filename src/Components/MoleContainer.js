import { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = (props) => {
    const [theMole, setTheMole] = useState(false);

    const handleClick = () => {
        props.setScore(props.score + 1);
        setTheMole(false);
    }

    let displayMole = theMole ? 
        <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : 
        <EmptySlot toggle={setTheMole} />;

    return (
        <div className="mole-container">
            {displayMole}
        </div>
    );
}

export default MoleContainer;
