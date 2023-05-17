import { useRef, useState } from "react";

const FormList = () =>{
    const number = useRef(null)
    const numberChoice = useRef(null)
    const longeur = 100
    const [list, setList] = useState([])
    const debut = 1

    const generateList=()=>{
        if(number.current.value!=""){
            const newlist=[]
            for (let index = 0; index < longeur; index++) {
                newlist.push(number.current.value*(debut+index));
            }
            setList(newlist)
        }else{
            setList([])
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