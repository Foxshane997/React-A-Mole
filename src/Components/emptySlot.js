import React from "react";
import { useEffect } from "react"

// Import Img
import MoleHill from '../molehill.png'

const EmptySlot = (props) => {

    // useEffect for timer random 
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            style={{'width': '30vw'}} 
            src={MoleHill} />
        </div>
    )
}

export default EmptySlot