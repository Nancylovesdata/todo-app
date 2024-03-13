// import React from "react";
import styles from "./index.module.css";

import { useState } from "react";

function CreateTodo() {
  const [todo, setTodo] = useState("");
  const saveTodos = async () => {
    // Post  all todos
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    // Wipe the input box
    setTodo("");
  };

  return (
    <section className={styles.createTodoSection}>
      <input
        value={todo}
        //gGetting the enter key to work in the todoapp
        onKeyDown={(event) => event.key === "Enter" && saveTodos()}
        // arrow function helps you to keep a compressed way of doing things
        onChange={(event) => setTodo(event.target.value)}
        className={styles.createTodoInput}
        placeholder="Start typing..."
      />
      <button className={`btn ${styles.btn}`} onClick={() => saveTodos()}>
        Create
      </button>
    </section>
  );
}

export default CreateTodo;
