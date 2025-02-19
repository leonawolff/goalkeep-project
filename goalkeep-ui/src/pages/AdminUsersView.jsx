import { useEffect, useState } from "react";
import { getUsers } from "../api";

const AdminUsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">All Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminUsersView;

  