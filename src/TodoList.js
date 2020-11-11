import React, { Component } from "react";
import { TodoListItem } from "./TodoListItem";

export class TodoList extends Component {
  state = {
    listTitle: "",
    taskItems: [
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
    ]
  };

  handleOnToggleCompleted = (taskId, event) => {
    this.setState({
      taskItems: this.state.taskItems.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            status: event.target.checked ? "completed" : "pending"
          };
        }

        return task;
      })
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.taskItems.map(task => (
            <li>
              <TodoListItem
                onToggleCompleted={this.handleOnToggleCompleted}
                taskId={task.id}
                status={task.status}
                taskName={task.name}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
