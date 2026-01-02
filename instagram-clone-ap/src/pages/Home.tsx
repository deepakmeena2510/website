import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>Home Feed</h2>
      <Link to="/reels">Reels</Link> |{" "}
      <Link to="/profile">Profile</Link>
    </div>
  );
}
