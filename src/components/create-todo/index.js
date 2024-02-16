import React from "react";
import styles from "./index.module.css";

function CreateTodo(){
  let todo;

  function collectInput(event){
    todo= event.target.value;
    
  }

  function saveTodo(){
    // Get existing list of todos from local storage
    //Note || means or, so if else can can be replaced by line 15
    let todos= JSON.parse(localStorage.getItem("TODO_KEY")) || [];
    // Add new todo to existing list of todos
    todos.push(todo);
    // Set all todos in local storage
    localStorage.setItem("TODO_KEY", JSON.stringify (todos));
    // console.log(todo)

  }
  
    return (
      <section className={styles.createTodoSection}>
        <input
         onChange={ collectInput}
         
          className={styles.createTodoInput} 
         placeholder="Start typing..." 
         />
        <button onClick= {saveTodo}>Create</button>
      </section>  
    );

}

export default CreateTodo;