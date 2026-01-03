import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2>Login</h2>

      <input placeholder="Username" style={{ padding: 8 }} /><br /><br />
      <input type="password" placeholder="Password" style={{ padding: 8 }} /><br /><br />

      <Link to="/home">
        <button style={{ padding: "8px 20px" }}>Login</button>
      </Link>

      <p>
        New user? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
