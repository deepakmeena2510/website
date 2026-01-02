import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <Link to="/home">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
    </div>
  );
}
