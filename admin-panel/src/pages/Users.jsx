import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

/* ---------------- USERS PAGE ---------------- */

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const snapshot = await getDocs(collection(db, "users"));
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    } catch (error) {
      console.error("Fetch Users Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleBlock = async (userId, currentStatus) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        blocked: !currentStatus,
      });
      fetchUsers();
    } catch (error) {
      console.error("Block Error:", error);
    }
  };

  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Kya aap is user ko permanently delete karna chahte ho?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "users", userId));
      fetchUsers();
    } catch (error) {
      console.error("Delete User Error:", error);
    }
  };

  if (loading) {
    return <h2 style={{ padding: 20 }}>Loading users...</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👤 Users Management</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username || "N/A"}</td>
              <td>{user.email || "N/A"}</td>
              <td>
                {user.blocked ? (
                  <span style={{ color: "red" }}>Blocked</span>
                ) : (
                  <span style={{ color: "green" }}>Active</span>
                )}
              </td>
              <td>
                <button
                  style={{
                    ...styles.button,
                    backgroundColor: user.blocked ? "#2ecc71" : "#f39c12",
                  }}
                  onClick={() => toggleBlock(user.id, user.blocked)}
                >
                  {user.blocked ? "Unblock" : "Block"}
                </button>

                <button
                  style={{ ...styles.button, backgroundColor: "#e74c3c" }}
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f5f6fa",
    minHeight: "100vh",
  },
  heading: {
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    backgroundColor: "#fff",
    borderCollapse: "collapse",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  button: {
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    marginRight: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
