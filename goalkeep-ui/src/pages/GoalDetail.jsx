// Working version with Goal Updates

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGoalById, updateGoal } from "../api";

const GoalDetail = () => {
    const { id } = useParams(); // Get goal ID from URL
    const [goal, setGoal] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        const fetchGoal = async () => {
            const data = await getGoalById(id);
            if (data) {
                setGoal(data);
                setTitle(data.title || ""); // Initialize with existing data
                setDescription(data.description || "");
                setDueDate(data.dueDate || "");
            }
        };
        fetchGoal();
    }, [id]);

    const handleUpdate = async () => {
        if (!goal || !goal.id) {
            console.error("Goal ID is missing");
            return;
        }

        const updatedGoal = {
            title,
            description,
            dueDate
        };

        console.log("Updating goal with ID:", goal.id); // Debugging log
        const result = await updateGoal(goal.id, updatedGoal); // Ensure goal.id is passed, not the whole goal object

        if (result) {
            console.log("Goal updated successfully!", result);
            alert("Goal updated successfully!");
        } else {
            console.error("Failed to update goal.");
        }
    };

    if (!goal) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Edit Goal</h1>
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

// ###########################################
// basic working version

// import { useParams } from "react-router-dom";

// export default function GoalDetail() {
//   const { id } = useParams(); // Get the goal ID from the URL

//   return (
//     <div>
//       <h1>Goal Detail Page</h1>
//       <p>Managing Goal ID: {id}</p>
//     </div>
//   );
// }

/// ########################################

// runs but does not work to update - newTitle is not defined 

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getGoalById, updateGoal } from "../api";

// export default function GoalDetail() {
//   const { id } = useParams();
//   const [goal, setGoal] = useState(null);

//   useEffect(() => {
//     async function fetchGoal() {
//       const data = await getGoalById(id);
//       setGoal(data);
//     }
//     fetchGoal();
//   }, [id]);

//   const handleUpdate = async () => {
//     if (!goal || !goal.id) {
//         console.error("Goal ID is missing");
//         return;
//     }

//     const updatedGoal = {
//         title: newTitle,
//         description: newDescription,
//         dueDate: newDueDate
//     };

//     console.log("Updating goal with ID:", goal.id); // Debugging log
//     const result = await updateGoal(goal.id, updatedGoal); // Ensure goal.id is passed, not the whole goal object

//     if (result) {
//         console.log("Goal updated successfully!", result);
//     } else {
//         console.error("Failed to update goal.");
//     }
// };


//   return goal ? (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold">Edit Goal</h2>
//       <input
//         type="text"
//         value={goal.title}
//         onChange={(e) => setGoal({ ...goal, title: e.target.value })}
//         className="block w-full p-2 border rounded my-2"
//       />
//       <textarea
//         value={goal.description}
//         onChange={(e) => setGoal({ ...goal, description: e.target.value })}
//         className="block w-full p-2 border rounded my-2"
//       />
//       <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded">
//         Save Changes
//       </button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );
// }