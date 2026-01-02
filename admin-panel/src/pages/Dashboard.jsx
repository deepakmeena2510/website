import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

/* ---------------- DASHBOARD ---------------- */

export default function Dashboard() {
  const [users, setUsers] = useState(0);
  const [posts, setPosts] = useState(0);
  const [reels, setReels] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const usersSnap = await getDocs(collection(db, "users"));
      const postsSnap = await getDocs(collection(db, "posts"));
      const reelsSnap = await getDocs(collection(db, "reels"));

      setUsers(usersSnap.size);
      setPosts(postsSnap.size);
      setReels(reelsSnap.size);
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📊 Admin Dashboard</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>👤 Users</h2>
          <p style={styles.number}>{users}</p>
        </div>

        <div style={styles.card}>
          <h2>🖼 Posts</h2>
          <p style={styles.number}>{posts}</p>
        </div>

        <div style={styles.card}>
          <h2>🎬 Reels</h2>
          <p style={styles.number}>{reels}</p>
        </div>
      </div>
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
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  number: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};
