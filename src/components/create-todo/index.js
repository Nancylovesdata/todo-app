// import React from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {
  const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
  const [todo, setTodo] = useState("");
  const saveTodos = () => {
// Save all todos

setTodos([...todos,todo]);
// Wipe the input box
setTodo("");
}
  

  return (
    <section className={styles.createTodoSection}>
      <input
      value={todo}
        //gGetting the enter key to work in the todoapp
        onKeyDown={event => event.key === "Enter" && saveTodos([...todos,todo])}
      
        // arrow function helps you to keep a compressed way of doing things
        onChange={event => setTodo(event.target.value)}

        className={styles.createTodoInput}
        placeholder="Start typing..."
      />
      <button className={`btn ${styles.btn}` }
        onClick={() => saveTodos()}
      >Create</button>
    </section>
  );

}

export default CreateTodo;