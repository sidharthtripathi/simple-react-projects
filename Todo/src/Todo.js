import {useState} from 'react';
import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid'
const data  = React.createContext();
export {data};
export function Task(title){
    this.title = title;
    this.id = uuid();
    this.status = false;
}
export default function Todo(){
    

    const [taskList,setTaskList] = useState(
    [
    new Task('Task one'),
    new Task('Task two'),
    new Task('Task three'),
    new Task('Task four')
    ]
    )

    return (
        <data.Provider value = {{taskList,setTaskList}}>
        <div>
            <TodoForm></TodoForm>
            <TodoList ></TodoList>
        </div>
        </data.Provider>
    )
}