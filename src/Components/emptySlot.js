import React, { useEffect } from "react";
import MoleHill from '../molehill.png';

const EmptySlot = (props) => {
    useEffect(() => {
        const randSeconds = Math.ceil(Math.random() * 5000);
        const timer = setTimeout(() => {
            props.toggle(true);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [props]);

    return (
        <div>
            <img
                src={MoleHill}
                alt="Mole Hill"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
            />
        </div>
    );
};

export default EmptySlot;
