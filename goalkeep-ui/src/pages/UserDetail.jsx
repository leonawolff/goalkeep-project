import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api";

const UserDetail = () => {
    const userId = sessionStorage.getItem("userId");
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null); // Success/Error message

    useEffect(() => {
        const fetchUser = async () => {
            if (!userId) {
                setMessage({ type: "error", text: "User ID not found." });
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
        if (!userId) {
            setMessage({ type: "error", text: "User ID is missing." });
            return;
        }

        const updatedUser = {
            username,
            email,
            ...(password ? { password } : {})
        };

        try {
            const result = await updateUser(userId, updatedUser);
            if (result) {
                setMessage({ type: "success", text: "User updated successfully!" });
                setPassword(""); // Clear password field after update
            } else {
                setMessage({ type: "error", text: "Failed to update user." });
            }
        } catch (error) {
            setMessage({ type: "error", text: "An error occurred while updating the user." });
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Edit Profile</h1>

            {/* Success/Error Message */}
            {message && (
                <div className={`p-2 mt-2 text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                    {message.text}
                </div>
            )}

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


// Working version - can update user details (without updating password)

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
//       // const userId = sessionStorage.getItem("userId"); // Ensure userId is retrieved

//       if (!userId) {
//           console.error("User ID is missing.");
//           return;
//       }
  
//       const updatedUser = {
//           username,
//           email,
//           ...(password ? { password } : {}) // Only include password if it's provided
//       };
  
//       console.log("Updating user with ID:", userId, updatedUser); // Debugging log
//         console.log("Old Username: ", user.username ); // Debugging log
//         console.log("New Username: ", updatedUser.username ); // Debugging log
//         console.log("Old email: ", user.email ); // Debugging log
//         console.log("New email: ", updatedUser.email ); // Debugging log
//       const result = await updateUser(userId, updatedUser);
  
//       if (result) {
//           console.log("User updated successfully!", result);
//           alert("User updated successfully!");
//           setPassword(""); // Clear password field after update
//       } else {
//           console.error("Failed to update user.");
//       }
//   };  

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
