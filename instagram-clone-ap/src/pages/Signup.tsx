import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2>Signup</h2>

      <input placeholder="Username" style={{ padding: 8 }} /><br /><br />
      <input placeholder="Email" style={{ padding: 8 }} /><br /><br />
      <input type="password" placeholder="Password" style={{ padding: 8 }} /><br /><br />

      <button style={{ padding: "8px 20px" }}>Create Account</button>

      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
