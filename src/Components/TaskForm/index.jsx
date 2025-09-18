import React, { useState } from "react";

export default function TaskForm({ setTasks }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
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
        priority,
      },
    ]);

    setText("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-2 py-2 bg-transparent focus:outline-none text-black"
        style={{
          borderBottom: "2px solid rgb(0,74,0)",
          borderRadius: "0 0 12px 12px",
        }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-2 py-2 rounded-md border text-black"
        style={{ borderColor: "rgb(0,74,0)" }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-2 py-2 rounded-md border text-black"
        style={{ borderColor: "rgb(0,74,0)" }}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button
        className="px-4 py-2 rounded-md text-white font-medium transition"
        style={{ backgroundColor: "rgb(0,74,0)" }}
      >
        Add
      </button>
    </form>
  );
}
