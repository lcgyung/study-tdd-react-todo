// src/TodoInput.tsx

import React from "react";

interface TodoInputProps {
  input: string;
  setInput: (input: string) => void;
  addTodo: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ input, setInput, addTodo }) => (
  <div>
    <input
      type="text"
      placeholder="새 할 일 입력..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={addTodo}>추가</button>
  </div>
);

export default TodoInput;
