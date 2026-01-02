import React from "react";
import { NavLink } from "react-router-dom";

/* ---------------- SIDEBAR ---------------- */

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      {/* Logo */}
      <h2 style={styles.logo}>Admin Panel</h2>

      {/* Menu */}
      <nav style={styles.menu}>
        <NavLink to="/dashboard" style={styles.link}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/users" style={styles.link}>
          👤 Users
        </NavLink>

        <NavLink to="/posts" style={styles.link}>
          🖼 Posts
        </NavLink>

        <NavLink to="/reels" style={styles.link}>
          🎬 Reels
        </NavLink>
      </nav>

      {/* Footer */}
      <div style={styles.footer}>
        <button style={styles.logout}>🚪 Logout</button>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  sidebar: {
    width: "230px",
    backgroundColor: "#1f1f1f",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "30px",
    textAlign: "center",
  },
  menu: {
    flex: 1,
  },
  link: {
    display: "block",
    padding: "12px 15px",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    marginBottom: "10px",
    backgroundColor: "#2c2c2c",
  },
  footer: {
    borderTop: "1px solid #333",
    paddingTop: "15px",
  },
  logout: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
  },
};
