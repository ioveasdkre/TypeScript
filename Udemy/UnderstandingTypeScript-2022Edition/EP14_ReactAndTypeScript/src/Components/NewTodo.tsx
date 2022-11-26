import React, { useRef, useEffect } from "react";

import "./NewTodo.css";

type NewTodoProp = {
  onAddTodo: (todoText: string) => void;
};

const NewTode: React.FC<NewTodoProp> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault(); // 取消事件的預設行為
    const enteredText = textInputRef.current!.value;

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTode;
