import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Reels from "./pages/Reels";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reels" element={<Reels />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h2>पेज नहीं मिला</h2>} />
    </Routes>
  );
}
