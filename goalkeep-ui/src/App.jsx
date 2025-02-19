import { Routes, Route, Link } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import GoalDashboard from "./pages/GoalDashboard";
import GoalDetail from "./pages/GoalDetail";

export default function App() {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Welcome to GoalKeep</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/user">User Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<GoalDashboard />} />
        <Route path="/user" element={<UserDetail />} />
        <Route path="/goal/:id" element={<GoalDetail />} />
      </Routes>
    </div>
  );
}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
