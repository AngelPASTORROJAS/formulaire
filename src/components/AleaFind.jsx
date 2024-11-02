import Alea from './Alea'
import { useEffect, useState } from "react"

const Find = () => {
    const [random, setRandom] = useState();
    useEffect( ()=> {
        setRandom(Math.random()*100)
    }, [] )

    return(
        <Alea random=Find />
    )
}