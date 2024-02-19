// import React from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {
  const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
  const [todo, setTodo] = useState("");

  return (
    <section className={styles.createTodoSection}>
      <input
        // arrow function helps you to keep a compressed way of doing things
        onChange={event => setTodo(event.target.value)}

        className={styles.createTodoInput}
        placeholder="Start typing..."
      />
      <button
        onClick={() => setTodos([...todos, todo])}
      >Create</button>
    </section>
  );

}

export default CreateTodo;