import { useEffect } from "react";

export default function useTaskReminder(tasks) {
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      tasks.forEach((task) => {
        if (task.dueDate && task.dueTime && !task.completed && !task.notified) {
          const due = new Date(`${task.dueDate}T${task.dueTime}`);
          const diff = due - now;

          if (diff > -10000 && diff < 60000) {
            const audio = new Audio("/alarm.wav");
            audio.play().catch((err) =>
              console.warn("Autoplay blocked:", err)
            );

            if ("Notification" in window && Notification.permission === "granted") {
              new Notification("⏰ Task Reminder", {
                body: task.text,
                icon: "/alarm.png", 
              });
            } else {
              alert(`⏰ Task Reminder: ${task.text}`);
            }

            task.notified = true;
          }
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [tasks]);
}
