import './App.css';
import { useState } from 'react';
import MoleContainer from './Components/MoleContainer';

function App() {
    const [score, setScore] = useState(0);

    // Randomizer for mole img iterated through the array
    const createMoleHill = () => {
        let hills = [];
        for (let i = 0; i < 8; i++) {
            hills.push(
                <MoleContainer
                    key={i}
                    setScore={setScore}
                    score={score} />
            );
        }
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {hills}
            </div>
        );
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            <div className="score">Score: {score}</div>
            {createMoleHill()}
        </div>
    );
}

export default App;
