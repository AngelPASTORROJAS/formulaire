import { useEffect, useState } from "react";

const Form = ()=>{
    const [number, setNumber] = useState();
    const [message, setMessage] = useState("");
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);

    const valid = () => {
        if(parseInt(number) == random){
            setMessage("Bravo, vous avez trouvé!");
        }
        else if(parseInt(number)<=random){
            setMessage("Trop petit");
            setMin(parseInt(number))
        }
        else if(parseInt(number)>=random){
            setMessage("Trop grand");
            setMax(parseInt(number))
        }
    }

    return (
        <>
        <input type="number" value={number} onChange={(e)=> setNumber(e.target)} />
        <button onClick={valid}>OK</button>
        <p>{message}</p>
        <p>Le nombre compris entre 1 et 100</p>
        </>
    )
}