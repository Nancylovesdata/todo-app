import { useState, useEffect } from "react";
import {useLocalStorage} from "usehooks-ts";
import TodoItem from "../todo-item"


function TodoList() {
    // let todos [];
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);
    
    // function getTodos() {
    //     // Get all todos from local storage and store it.
    //     let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];

    //     //Update React State   
    //     setTodos(todos);
    // }

    // useEffect(getTodos, []);
    return (
        <ul className="list-group">
            {todos.map( (todo, index)=> <TodoItem todo={todo} Index={index}/>

                     )};
                     </ul>
    );
}

export default TodoList;