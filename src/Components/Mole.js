import { useEffect } from 'react'

// Import Img
import moleImg from '../mole.png'

const Mole = (props) => {

    // useEffect for timer random
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            style={{'width': '30vw'}} 
            src={moleImg} 
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole

