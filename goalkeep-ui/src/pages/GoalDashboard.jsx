import NewGoalForm from "./NewGoalForm.jsx";
import { useEffect, useState } from "react";
import { getGoals } from "../api";

const GoalDashboard = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    const data = await getGoals();
    setGoals(data || []);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Goal Dashboard</h1>
      <NewGoalForm onGoalCreated={loadGoals} /> {/* ✅ Pass function to refresh goals */}
      <ul className="mt-4">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <li key={goal.id} className="p-2 border-b">
              {goal.title} - {goal.dueDate}
            </li>
          ))
        ) : (
          <p>No goals found.</p>
        )}
      </ul>
    </div>
  );
};

export default GoalDashboard;


// import { useEffect, useState } from "react";
// import { getGoals, createGoal } from "../api";

// const GoalDashboard = () => {
//   const [goals, setGoals] = useState([]);
//   const [newGoal, setNewGoal] = useState({ title: "", description: "", dueDate: "" });

//   useEffect(() => {
//     const fetchGoals = async () => {
//       const data = await getGoals();
//       setGoals(data); // Update state with fetched goals
//     };
//     fetchGoals();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const addedGoal = await createGoal(newGoal);
//     if (addedGoal) {
//       setGoals([...goals, addedGoal]); // Update the state
//       setNewGoal({ title: "", description: "", dueDate: "" }); // Reset form
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Goal Dashboard</h1>

//       {/* Add Goal Form */}
//       <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow">
//         <h2 className="text-xl font-semibold mb-2">Add New Goal</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={newGoal.title}
//           onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={newGoal.description}
//           onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//           required
//         />
//         <input
//           type="date"
//           value={newGoal.dueDate}
//           onChange={(e) => setNewGoal({ ...newGoal, dueDate: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Goal</button>
//       </form>

//       {/* List of Goals */}
//       {goals.length === 0 ? (
//         <p>No goals found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {goals.map((goal) => (
//             <li key={goal.id} className="p-4 border rounded shadow">
//               <h2 className="text-xl font-semibold">{goal.title}</h2>
//               <p>{goal.description}</p>
//               <p className="text-sm text-gray-500">Due: {goal.dueDate}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default GoalDashboard;


// // export default function GoalDashboard() {
// //     return (
// //       <div>
// //         <h1>Goal Dashboard</h1>
// //         <p>View and create your goals here.</p>
// //       </div>
// //     );
// //   }
  