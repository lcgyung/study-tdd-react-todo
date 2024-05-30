// src/TodoApp.tsx

import React, { useState } from "react";
import { TodoInput, TodoList } from "./components";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
