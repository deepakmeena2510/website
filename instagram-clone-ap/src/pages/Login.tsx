import { Link } from "react-router-dom";

export default function Login() {
  याद
  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        style={{ padding: 8, marginBottom: 10 }}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        style={{ padding: 8, marginBottom: 10 }}
      />
      <br />

      <Link to="/home">
        <button style={{ padding: "8px 20px" }}>Login</button>
      </Link>

      <p style={{ marginTop: 10 }}>
        New user? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
