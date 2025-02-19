import { useState } from "react";
import { createGoal } from "../api";

export default function NewGoalForm({ onGoalCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const userId = sessionStorage.getItem("userId"); // Get userId from sessionStorage

    if (!userId) {
      setError("No user is logged in. Please log in first.");
      return;
    }

    const goalData = {
      title,
      description,
      dueDate,
      user: { id: parseInt(userId, 10) }, // 👈 Include user ID
    };

    try {
      await createGoal(goalData);
      setSuccess("Goal created successfully!");
      setTitle("");
      setDescription("");
      setDueDate("");
      if (onGoalCreated) onGoalCreated();
    } catch (error) {
      setError("Error creating goal. Please try again.");
      console.error("Error creating goal:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow">
      <h2 className="text-lg font-semibold">New Goal</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Goal
      </button>
    </form>
  );
}
