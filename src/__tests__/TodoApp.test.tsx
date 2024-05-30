// src/__tests__/TodoApp.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "../App";

test("새로운 할 일을 추가할 수 있다", () => {
  render(<TodoApp />);

  const input = screen.getByPlaceholderText("새 할 일 입력...");
  const button = screen.getByText("추가");

  fireEvent.change(input, { target: { value: "할 일 1" } });
  fireEvent.click(button);

  expect(screen.getByText("할 일 1")).toBeInTheDocument();
});
