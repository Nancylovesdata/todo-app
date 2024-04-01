import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item"


function TodoList() {
    const [todos, setTodos] = useState([]);

    async function clearTodos() {
        // Delete all todos from the API
        const url = "http://localhost:4000/todos";
        const delresponse = await fetch (url,{
            method: "delete"
        })
       console.log(delresponse) 
        // Update React state to empty array
    }

    async function getTodos() {
        // Get all todos from API.
        const url = "http://localhost:4000/todos";
        const response = await fetch(url)
        const data = await response.json();
        // Update React State  
        console.log(data) 
        setTodos(data)
    }

    // Use useEfect to run getTodos
    useEffect(() => {
        getTodos();

    }, []);

    return (
        <section>
            <button
                className="btn btn-danger"
                onClick={clearTodos}
            >Clear Todos</button>

            <ul className="list-group">
                {todos.map(function (todo, index) {
                    return <TodoItem key={todo._id} todo={todo.title} index={index} />

                })}
            </ul>
        </section>
    );
}

export default TodoList;