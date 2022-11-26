import React, { useState } from "react";
// import { Route } from "react-router-dom"; // 沒有再用  單純示範導入外掛套件

import TodoList from "./Components/TodoList";
import NewTode from "./Components/NewTodo";
import { Todo } from "./todo.model";

// React.FC = React.FunctionComponent // 這兩種是相同的
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTode onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
