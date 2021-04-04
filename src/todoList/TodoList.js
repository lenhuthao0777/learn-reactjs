import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import {useSelector} from 'react-redux'

function TodoList() {
    const { data, isLoading } = useSelector((state) => state.TodoReducer);
    return (
        <div>
            <h1>TODO LIST</h1>
            <TodoForm/>
            {data.map(item=>(
                <Todo key={item.id} data={item}/>
            ))}
            
        </div>
    )
}

export default TodoList
