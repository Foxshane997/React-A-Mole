import React from 'react'
import {useEffect} from 'react'
import moleImage from "../mole.png"

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImage}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole