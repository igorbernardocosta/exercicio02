import React, { useState } from "react";
import { TodoListItemV2 } from "./TodoListItemV2";

export const TodoListV2 = () => {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      name: "Task 1",
      status: "pending"
    },
    {
      id: 2,
      name: "Task 2",
      status: "pending"
    },
    {
      id: 3,
      name: "Task 3",
      status: "pending"
    }
  ]);

  const handleOnToggleCompleted = (taskId, event) => {
    const newTaskItems = taskItems.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: event.target.checked ? "completed" : "pending"
        };
      }

      return task;
    });

    setTaskItems(newTaskItems);
  };

  return (
    <div>
      <ul>
        {taskItems.map((task) => (
          <li>
            <TodoListItemV2
              onToggleCompleted={handleOnToggleCompleted}
              taskId={task.id}
              status={task.status}
              taskName={task.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
