import "./App.css";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<div>Signin</div>} />
    </Routes>
  );
}

export default App;
