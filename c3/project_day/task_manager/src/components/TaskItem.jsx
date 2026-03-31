import React from "react";

function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div style={{ margin: "10px" }}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "5px" }}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;