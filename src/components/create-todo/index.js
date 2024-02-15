import React from "react";
import styles from "./index.module.css"

function CreateTodo(){
  const[todo, setTodo] = React.useState("");
    return (
      <section className={styles.createTodoSection}>
        <input
         onChange={function(event){
          console.log(event.target.value);
         }}
          className={styles.createTodoInput} 
         placeholder="Start typing..." />
        <button>Create</button>
      </section>  
    );

}

export default CreateTodo;