import React from "react";

export default function TaskItem({ task, toggleComplete, deleteTask }) {
  // Helper function to format time to 12-hour with AM/PM
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-3 rounded-md border shadow-sm bg-white w-full">
      <div>
        <p
          className={`${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          } font-medium`}
        >
          {task.text}
        </p>

        <p className="text-sm text-gray-500">
          {task.dueDate && `📅 ${task.dueDate}`}{" "}
          {task.dueTime && `⏰ ${formatTime(task.dueTime)}`} | Priority:{" "}
          {task.priority}
        </p>
      </div>

      <div className="flex gap-2 flex-wrap sm:flex-nowrap">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-3 py-1 rounded-md text-white w-full sm:w-auto"
          style={{ backgroundColor: "rgba(5,192,5,1)" }}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md w-full sm:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
