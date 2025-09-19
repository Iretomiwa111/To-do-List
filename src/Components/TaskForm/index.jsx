import React, { useState } from "react";

export default function TaskForm({ setTasks }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState(""); 
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
        dueDate,
        dueTime,
        priority,
      },
    ]);

    setText("");
    setDueDate("");
    setDueTime("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:grid sm:grid-cols-5 sm:gap-4 mb-6 w-full"
    >
      {/* Task input */}
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="col-span-2 px-3 py-2 border rounded-md focus:outline-none text-black"
        style={{ borderColor: "rgba(0,139,0,1)" }}
      />

      {/* Date input */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-3 py-2 border rounded-md text-black"
        style={{ borderColor: "rgba(2,129,2,1)" }}
      />

      {/* Time input */}
      <input
        type="time"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
        className="px-3 py-2 border rounded-md text-black"
        style={{ borderColor: "rgba(0,138,0,1)" }}
      />

      {/* Priority dropdown */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-3 py-2 border rounded-md text-black"
        style={{ borderColor: "rgba(0,133,0,1)" }}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      {/* Add button */}
      <button
        className="px-4 py-2 rounded-md text-white font-medium transition w-full sm:w-auto"
        style={{ backgroundColor: "rgba(2,136,2,1)" }}
      >
        Add
      </button>
    </form>
  );
}
