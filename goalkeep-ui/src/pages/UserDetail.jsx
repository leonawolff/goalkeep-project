import { useEffect, useState } from "react";
import { getUserById } from "../api";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const userId = 1; // Temporary hardcoded user ID, replace with actual authentication later

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserById(userId);
      setUser(data);
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading user details...</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">{user.username}</h2>
        <p className="text-gray-700">{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetail;


// export default function UserDetail() {
//     return (
//       <div>
//         <h1>User Detail Page</h1>
//         <p>Update your account information here.</p>
//       </div>
//     );
//   }
  