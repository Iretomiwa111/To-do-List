import React, { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
  <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
    <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg border">
      <h1
        className="text-3xl font-bold text-center mb-6"
        style={{ color: "rgb(0,74,0)" }}
      >
        To-Do List
      </h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  </div>
);
}