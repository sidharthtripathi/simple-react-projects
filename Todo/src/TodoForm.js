import { useContext, useState } from 'react'
import {data} from './Todo'
import {useRef} from 'react'
import {Task} from './Todo'
export default function TodoForm(){
const setTaskList = useContext(data).setTaskList;
const taskList = useContext(data).taskList;
const task = useRef(null)
const [warning,setWarning] = useState(false)
function handleSubmit(e){
e.preventDefault();
if(task.current.value.length <= 3){
setWarning(true)
return;
}
setWarning(false)
setTaskList([...taskList,new Task(task.current.value)]);
task.current.value = ''
}
    return(

        <form onSubmit = {handleSubmit}>
            <input ref = {task} type = 'text' ></input>
            <button type = 'submit'>Add</button>
            {warning && <p>length should be more than 3 !</p>}
        </form>
    )
}