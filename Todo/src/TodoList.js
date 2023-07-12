import { useContext} from 'react'
import {data} from './Todo'
export default function TodoList(){
const taskList = useContext(data).taskList
const setTaskList = useContext(data).setTaskList;
function handleDelete(id){
const tl = taskList.filter((i)=>{
    return i.id!==id
})
setTaskList(tl);
}

function handleCheck(id){
    //console.log('toggling')
const tl = taskList.map((i)=>{
    
    if(i.id === id){
        if(i.status === false){
            
            return {...i,status:true}
        }
        else
        return {...i,status:false}
    }
    
    else
    return i
})
setTaskList(tl)
}


 
return (
    <div>
        {taskList.map((i,index)=>{
            let taskStatus = i.status;
            return (
                <div key = {i.id}>
                    <p style = {{textDecoration : taskStatus ? 'line-through' : 'none'}}>{index + 1 + ". "}{i.title}</p>
                    <button onClick={()=>{handleCheck(i.id)}}>{i.status === true ? 'uncheck' : 'check'}</button>
                    <button onClick = {()=>{handleDelete(i.id)}}>Delete</button>
                </div>
            )
        })}
    </div>
)

}