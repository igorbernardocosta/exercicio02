import React from "react";
import ReactDOM from "react-dom";
import { TodoListV2 } from "./hooks/TodoListV2";

import "./styles.css";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TodoList />
      <h1>New todo list</h1>
      <TodoListV2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
