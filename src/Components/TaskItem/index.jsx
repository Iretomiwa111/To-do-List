import React from "react";

export default function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="flex justify-between items-center p-3 rounded-md border shadow-sm bg-white">
      <div>
        <p
          className={`${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          } font-medium`}
        >
          {task.text}
        </p>
        <p className="text-sm text-gray-500">
          {task.dueDate && `📅 ${task.dueDate}`} | Priority: {task.priority}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-2 py-1 rounded-md text-white"
          style={{ backgroundColor: "rgb(0,74,0)" }}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
