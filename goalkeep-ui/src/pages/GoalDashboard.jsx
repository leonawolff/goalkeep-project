
// WORKING VERSION: Nav bar, clickable goals, working New Goal form : new goal form below goal list

import { useEffect, useState } from "react";
import { getGoals } from "../api";
import { Link } from "react-router-dom";
import NewGoalForm from "./NewGoalForm"; // Import the form

export default function GoalDashboard() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function fetchGoals() {
      const data = await getGoals();
      setGoals(data);
    }
    fetchGoals();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Goals</h2>

      {/* Goal List */}
      {goals.length === 0 ? (
        <p>No goals found. Start by adding a new one!</p>
      ) : (
        <ul className="space-y-3">
          {goals.map((goal) => (
            <li key={goal.id} className="bg-white shadow-md p-4 rounded-md hover:bg-gray-100">
              {/* Clickable Goal Link */}
              <Link to={`/goal/${goal.id}`} className="text-blue-600 font-semibold hover:underline">
                {goal.title}
              </Link>
              <p className="text-gray-700">{goal.description}</p>
              <p className="text-sm text-gray-500">Due: {goal.dueDate}</p>
            </li>
          ))}
        </ul>
      )}

      {/* New Goal Form */}
      <div className="mt-6 p-4 bg-gray-50 border rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Create a New Goal</h3>
        <NewGoalForm />
      </div>
    </div>
  );
}

// #######################################################################################

// import NewGoalForm from "./NewGoalForm.jsx";
// import { useEffect, useState } from "react";
// import { getGoals } from "../api";

// const GoalDashboard = () => {
//   const [goals, setGoals] = useState([]);

//   useEffect(() => {
//     loadGoals();
//   }, []);

//   const loadGoals = async () => {
//     const data = await getGoals();
//     setGoals(data || []);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Goal Dashboard</h1>
//       <NewGoalForm onGoalCreated={loadGoals} /> {/* ✅ Pass function to refresh goals */}
//       <ul className="mt-4">
//         {goals.length > 0 ? (
//           goals.map((goal) => (
//             <li key={goal.id} className="p-2 border-b">
//               {goal.title} - {goal.dueDate}
//             </li>
//           ))
//         ) : (
//           <p>No goals found.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default GoalDashboard;


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
  