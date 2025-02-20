import { Routes, Route, Link } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import GoalDashboard from "./pages/GoalDashboard";
import GoalDetail from "./pages/GoalDetail";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // ****TEMPORARY**** setting a hardcoded user ID
    sessionStorage.setItem("userId", 1);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">GoalKeep</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/user" className="hover:text-gray-300">
                User Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<GoalDashboard />} />
          <Route path="/user" element={<UserDetail />} />
          <Route path="/goal/:id" element={<GoalDetail />} />
        </Routes>
      </div>
    </div>
  );
}

// import { useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import UserDetail from "./pages/UserDetail";
// import GoalDashboard from "./pages/GoalDashboard";
// import GoalDetail from "./pages/GoalDetail";

// export default function App() {
//   useEffect(() => {
//     // ****TEMPORARY**** setting a hardcoded user ID
//     sessionStorage.setItem("userId", 1);
//   }, []);

//   return (
//     <div>
//       <div className="p-10">
//         <h1 className="text-3xl font-bold">Welcome to GoalKeep</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/">Dashboard</Link></li>
//           <li><Link to="/user">User Profile</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<GoalDashboard />} />
//         <Route path="/user" element={<UserDetail />} />
//         <Route path="/goal/:id" element={<GoalDetail />} />
//       </Routes>
//     </div>
//   );
// }
// import { Routes, Route, Link } from "react-router-dom";
// import UserDetail from "./pages/UserDetail";
// import GoalDashboard from "./pages/GoalDashboard";
// import GoalDetail from "./pages/GoalDetail";

// export default function App() {

//   useEffect(() => {
//     // ****TEMPORARY**** setting a hardcoded user ID 
//     sessionStorage.setItem("userId", 1);
//   }, []);

//   return (
//     <div>
//       <div className="p-10">
//         <h1 className="text-3xl font-bold">Welcome to GoalKeep</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/">Dashboard</Link></li>
//           <li><Link to="/user">User Profile</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<GoalDashboard />} />
//         <Route path="/user" element={<UserDetail />} />
//         <Route path="/goal/:id" element={<GoalDetail />} />
//       </Routes>
//     </div>
//   );
// }

// FOR TESTING:

// import { useEffect, useState } from "react";
// import { getUsers, getGoals } from "./api";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [goals, setGoals] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const usersData = await getUsers();
//       const goalsData = await getGoals();
//       setUsers(usersData);
//       setGoals(goalsData);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-blue-600">GoalKeep API Test</h1>
//       <h2 className="text-xl mt-4 font-semibold">Users</h2>
//       <ul>
//         {users.length ? users.map((user) => <li key={user.id}>{user.username}</li>) : <li>No users found.</li>}
//       </ul>

//       <h2 className="text-xl mt-4 font-semibold">Goals</h2>
//       <ul>
//         {goals.length ? goals.map((goal) => <li key={goal.id}>{goal.title}</li>) : <li>No goals found.</li>}
//       </ul>
//     </div>
//   );
// }