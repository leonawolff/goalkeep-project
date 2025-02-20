import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGoalById, updateGoal } from "../api";

const GoalDetail = () => {
    const { id } = useParams();
    const [goal, setGoal] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [message, setMessage] = useState(null); // To store success/error messages

    useEffect(() => {
        const fetchGoal = async () => {
            const data = await getGoalById(id);
            if (data) {
                setGoal(data);
                setTitle(data.title || "");
                setDescription(data.description || "");
                setDueDate(data.dueDate || "");
            }
        };
        fetchGoal();
    }, [id]);

    const handleUpdate = async () => {
        if (!goal || !goal.id) {
            setMessage({ type: "error", text: "Goal ID is missing" });
            return;
        }

        const updatedGoal = { title, description, dueDate };

        try {
            const result = await updateGoal(goal.id, updatedGoal);
            if (result) {
                setMessage({ type: "success", text: "Goal updated successfully!" });
            } else {
                setMessage({ type: "error", text: "Failed to update goal." });
            }
        } catch (error) {
            setMessage({ type: "error", text: "An error occurred while updating the goal." });
        }
    };

    if (!goal) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Edit Goal</h1>

            {/* Success/Error Message */}
            {message && (
                <div className={`p-2 mt-2 text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                    {message.text}
                </div>
            )}

            <div className="mt-4">
                <label className="block font-semibold">Title:</label>
                <input
                    type="text"
                    className="border p-2 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mt-4">
                <label className="block font-semibold">Description:</label>
                <textarea
                    className="border p-2 w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mt-4">
                <label className="block font-semibold">Due Date:</label>
                <input
                    type="date"
                    className="border p-2 w-full"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>

            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleUpdate}
            >
                Save Changes
            </button>
        </div>
    );
};

export default GoalDetail;



// // Working version with Goal Updates

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getGoalById, updateGoal } from "../api";

// const GoalDetail = () => {
//     const { id } = useParams(); // Get goal ID from URL
//     const [goal, setGoal] = useState(null);
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [dueDate, setDueDate] = useState("");

//     useEffect(() => {
//         const fetchGoal = async () => {
//             const data = await getGoalById(id);
//             if (data) {
//                 setGoal(data);
//                 setTitle(data.title || ""); // Initialize with existing data
//                 setDescription(data.description || "");
//                 setDueDate(data.dueDate || "");
//             }
//         };
//         fetchGoal();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!goal || !goal.id) {
//             console.error("Goal ID is missing");
//             return;
//         }

//         const updatedGoal = {
//             title,
//             description,
//             dueDate
//         };

//         console.log("Updating goal with ID:", goal.id); // Debugging log
//         const result = await updateGoal(goal.id, updatedGoal); // Ensure goal.id is passed, not the whole goal object

//         if (result) {
//             console.log("Goal updated successfully!", result);
//             alert("Goal updated successfully!");
//         } else {
//             console.error("Failed to update goal.");
//         }
//     };

//     if (!goal) return <p>Loading...</p>;

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">Edit Goal</h1>
//             <div className="mt-4">
//                 <label className="block font-semibold">Title:</label>
//                 <input
//                     type="text"
//                     className="border p-2 w-full"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//             </div>

//             <div className="mt-4">
//                 <label className="block font-semibold">Description:</label>
//                 <textarea
//                     className="border p-2 w-full"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//             </div>

//             <div className="mt-4">
//                 <label className="block font-semibold">Due Date:</label>
//                 <input
//                     type="date"
//                     className="border p-2 w-full"
//                     value={dueDate}
//                     onChange={(e) => setDueDate(e.target.value)}
//                 />
//             </div>

//             <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//                 onClick={handleUpdate}
//             >
//                 Save Changes
//             </button>
//         </div>
//     );
// };

// export default GoalDetail;
