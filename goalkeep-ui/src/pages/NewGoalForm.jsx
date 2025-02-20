import { useState } from "react";
import { createGoal } from "../api";

export default function NewGoalForm({ onGoalCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [message, setMessage] = useState(null); // Store success/error messages
    const userId = sessionStorage.getItem("userId"); // Get userId from sessionStorage

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null); // Clear previous messages

        if (!title.trim()) {
            setMessage({ type: "error", text: "Title cannot be empty." });
            return;
        }

        if (!userId) {
            setMessage({ type: "error", text: "No user is logged in. Please log in first." });
            return;
        }

        const newGoal = {
            title,
            description,
            dueDate,
            user: { id: userId },
        };

        try {
            const result = await createGoal(newGoal);
            if (result) {
                setMessage({ type: "success", text: "Goal created successfully!" });
                setTitle("");
                setDescription("");
                setDueDate("");

                if (onGoalCreated) onGoalCreated(); // Refresh goal list if needed
            } else {
                setMessage({ type: "error", text: "Failed to create goal. Please try again." });
            }
        } catch (error) {
            setMessage({ type: "error", text: "An error occurred while creating the goal." });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">New Goal</h2>

            {/* Success/Error Message Display */}
            {message && (
                <div className={`p-2 rounded ${message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {message.text}
                </div>
            )}

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



// import { useState } from "react";
// import { createGoal } from "../api";

// export default function NewGoalForm({ onGoalCreated }) {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [dueDate, setDueDate] = useState("");
//     const [message, setMessage] = useState(null); // To store success/error messages
//     const userId = sessionStorage.getItem("userId"); // Get userId from sessionStorage

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(""); // Clear previous messages

//     if (!title.trim()) {
//         setMessage({ type: "error", text: "Title cannot be empty." });
//         return;
//     }

//     if (!userId) {
//     setMessage({ type: "error", text: "No user is logged in. Please log in first."});
//       return;
//     }

//     const newGoal  = {
//         title,
//         description,
//         dueDate,
//         user: { id: (userId) },
//       };  

//     try {
//         const result = await createGoal(newGoal);
//         if (result) {
//             setMessage({ type: "success", text: "Goal created successfully!" });
//             setTitle("");
//             setDescription("");
//             setDueDate("");
//         } else {
//             setMessage({ type: "error", text: "Failed to create goal. Please try again." });
//         }
//     } catch (error) {
//         setMessage({ type: "error", text: "An error occurred while creating the goal." });
//     }

//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow">
//       <h2 className="text-lg font-semibold">New Goal</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       {success && <p className="text-green-500">{success}</p>}
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="border p-2 w-full"
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="border p-2 w-full"
//         required
//       />
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         className="border p-2 w-full"
//         required
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Create Goal
//       </button>
//     </form>
//   );
// }
