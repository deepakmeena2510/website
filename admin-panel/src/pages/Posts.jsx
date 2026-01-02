import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

/* ---------------- POSTS PAGE ---------------- */

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      const postsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    } catch (error) {
      console.error("Fetch Posts Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const approvePost = async (postId) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        approved: true,
      });
      fetchPosts();
    } catch (error) {
      console.error("Approve Error:", error);
    }
  };

  const deletePost = async (postId) => {
    const confirmDelete = window.confirm(
      "Kya aap is post ko delete karna chahte ho?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "posts", postId));
      fetchPosts();
    } catch (error) {
      console.error("Delete Post Error:", error);
    }
  };

  if (loading) {
    return <h2 style={{ padding: 20 }}>Loading posts...</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🖼 Posts Management</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Preview</th>
            <th>Username</th>
            <th>Caption</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>

              <td>
                <img
                  src={post.imageUrl}
                  alt="post"
                  style={{ width: 60, height: 60, objectFit: "cover" }}
                />
              </td>

              <td>{post.username || "N/A"}</td>

              <td style={{ maxWidth: 200 }}>
                {post.caption || "No caption"}
              </td>

              <td>
                {post.approved ? (
                  <span style={{ color: "green" }}>Approved</span>
                ) : (
                  <span style={{ color: "orange" }}>Pending</span>
                )}
              </td>

              <td>
                {!post.approved && (
                  <button
                    style={{
                      ...styles.button,
                      backgroundColor: "#2ecc71",
                    }}
                    onClick={() => approvePost(post.id)}
                  >
                    Approve
                  </button>
                )}

                <button
                  style={{ ...styles.button, backgroundColor: "#e74c3c" }}
                  onClick={() => deletePost(post.id)}
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
