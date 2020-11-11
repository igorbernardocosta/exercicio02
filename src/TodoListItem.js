import React from "react";

export function TodoListItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => props.onToggleCompleted(props.taskId, event)}
      />
      <b
        style={{
          textDecoration:
            props.status === "completed" ? "line-through" : "none",
          background: "gray"
        }}
      >
        Item de tarefa: {props.taskName}
      </b>
    </div>
  );
}
