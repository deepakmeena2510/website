import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Username"
        style={{ padding: 8, marginBottom: 10 }}
      />
      <br />

      <input
        type="email"
        placeholder="Email"
        style={{ padding: 8, marginBottom: 10 }}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        style={{ padding: 8, marginBottom: 10 }}
      />
      <br />

      <button style={{ padding: "8px 20px" }}>Create Account</button>

      <p style={{ marginTop: 10 }}>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
