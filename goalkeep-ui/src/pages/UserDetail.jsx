import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api";

const UserDetail = () => {
    const userId = sessionStorage.getItem("userId"); // Get user ID from sessionStorage
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            if (!userId) {
                console.error("User ID not found in sessionStorage.");
                return;
            }
            const data = await getUserById(userId);
            if (data) {
                setUser(data);
                setUsername(data.username || "");
                setEmail(data.email || "");
            }
        };
        fetchUser();
    }, [userId]);

    const handleUpdate = async () => {
      // const userId = sessionStorage.getItem("userId"); // Ensure userId is retrieved

      if (!userId) {
          console.error("User ID is missing.");
          return;
      }
  
      const updatedUser = {
          username,
          email,
          ...(password ? { password } : {}) // Only include password if it's provided
      };
  
      console.log("Updating user with ID:", userId, updatedUser); // Debugging log
        console.log("Old Username: ", user.username ); // Debugging log
        console.log("New Username: ", updatedUser.username ); // Debugging log
        console.log("Old email: ", user.email ); // Debugging log
        console.log("New email: ", updatedUser.email ); // Debugging log
      const result = await updateUser(userId, updatedUser);
  
      if (result) {
          console.log("User updated successfully!", result);
          alert("User updated successfully!");
          setPassword(""); // Clear password field after update
      } else {
          console.error("Failed to update user.");
      }
  };  

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Edit Profile</h1>
            <div className="mt-4">
                <label className="block font-semibold">Username:</label>
                <input
                    type="text"
                    className="border p-2 w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="mt-4">
                <label className="block font-semibold">Email:</label>
                <input
                    type="email"
                    className="border p-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mt-4">
                <label className="block font-semibold">New Password:</label>
                <input
                    type="password"
                    className="border p-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-gray-500 text-sm mt-1">
                    Leave blank to keep your current password.
                </p>
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

export default UserDetail;

// last v 

// import { useEffect, useState } from "react";
// import { getUserById, updateUser } from "../api";

// const UserDetail = () => {
//     const userId = sessionStorage.getItem("userId"); // Get user ID from sessionStorage
//     const [user, setUser] = useState(null);
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     useEffect(() => {
//         const fetchUser = async () => {
//             if (!userId) {
//                 console.error("User ID not found in sessionStorage.");
//                 return;
//             }
//             const data = await getUserById(userId);
//             if (data) {
//                 setUser(data);
//                 setUsername(data.username || "");
//                 setEmail(data.email || "");
//             }
//         };
//         fetchUser();
//     }, [userId]);

//     const handleUpdate = async () => {
//         if (!userId) {
//             console.error("User ID is missing.");
//             return;
//         }

//         const updatedUser = {
//             username,
//             email,
//             password: password || undefined, // Only send password if it's been changed
//         };

//         console.log("Updating user with ID:", userId); // Debugging log
//         console.log("Old Username: ", user.username ); // Debugging log
//         console.log("New Username: ", updatedUser.username ); // Debugging log
//         console.log("Old email: ", user.email ); // Debugging log
//         console.log("New email: ", updatedUser.email ); // Debugging log
//         const result = await updateUser(userId, updatedUser); 

//         if (result) {
//             console.log("User updated successfully!", result);
//             alert("User updated successfully!");
//             setPassword(""); // Clear password field after update
//         } else {
//             console.error("Failed to update user.");
//         }
//     };

//     if (!user) return <p>Loading...</p>;

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">Edit Profile</h1>
//             <div className="mt-4">
//                 <label className="block font-semibold">Username:</label>
//                 <input
//                     type="text"
//                     className="border p-2 w-full"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>

//             <div className="mt-4">
//                 <label className="block font-semibold">Email:</label>
//                 <input
//                     type="email"
//                     className="border p-2 w-full"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>

//             <div className="mt-4">
//                 <label className="block font-semibold">New Password:</label>
//                 <input
//                     type="password"
//                     className="border p-2 w-full"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <p className="text-gray-500 text-sm mt-1">
//                     Leave blank to keep your current password.
//                 </p>
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

// export default UserDetail;


// ##############################################################################
// Runs but doesn't correctly capture ID required for api.js.UpdateUser()

// import { useState, useEffect } from "react";
// import { getUserById, updateUser } from "../api";

// export default function UserDetail() {
//   const userId = sessionStorage.getItem("userId");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       const data = await getUserById(userId);
//       setUser(data);
//     }
//     fetchUser();
//   }, []);

//   const handleUpdate = async () => {
//     await updateUser(user, userId);
//     alert("Profile updated!");
//   };

//   return user ? (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold">Edit Profile</h2>
//       <input
//         type="text"
//         value={user.username}
//         onChange={(e) => setUser({ ...user, username: e.target.value })}
//         className="block w-full p-2 border rounded my-2"
//       />
//       <input
//         type="email"
//         value={user.email}
//         onChange={(e) => setUser({ ...user, email: e.target.value })}
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


// ###################################################################################################
// Working basic version

// import { useEffect, useState } from "react";
// import { getUserById } from "../api";

// const UserDetail = () => {
//   const [user, setUser] = useState(null);
//   const userId = 1; // Temporary hardcoded user ID, replace with actual authentication later

//   useEffect(() => {
//     const fetchUser = async () => {
//       const data = await getUserById(userId);
//       setUser(data);
//     };
//     fetchUser();
//   }, []);

//   if (!user) return <p>Loading user details...</p>;

//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">User Profile</h1>
//       <div className="p-4 border rounded shadow">
//         <h2 className="text-xl font-semibold">{user.username}</h2>
//         <p className="text-gray-700">{user.email}</p>
//       </div>
//     </div>
//   );
// };

// export default UserDetail;

// ###################################################################################################
