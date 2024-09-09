import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="signup" element={<div>SignUp</div>} />
      <Route path="signin" element={<div>Signin</div>} />
    </Routes>
  );
}

export default App;
