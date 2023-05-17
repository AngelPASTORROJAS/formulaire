import { useRef, useState } from "react";

const FormList = () =>{
    const number = useRef(null)
    const numberChoice = useRef(null)
    const [list, setList] = useState([])

    const generateList=()=>{
        list.splice(0, list.length);
        setList(list)
        if(number.current.value!=""){
            const newlist=[]
            for (let index = 0+1; index < 100+1; index++) {
                newlist.push(number.current.value*(index));
            }
            setList(newlist)
        }
    }
    
    return (
        <form action="">
            <label htmlFor="nombre">Nombre</label>
            <input type="number" name="" id="nombre" ref={number} onChange={generateList}/>
            <label htmlFor="list">List</label>
            <select name="" ref={numberChoice} id="list">
                {list.map(e=>
                <option key={e}>{e}</option>
                    )}
            </select>
        </form>
    );
}

export default FormList