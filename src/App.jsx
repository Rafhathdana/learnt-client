import "./App.css";
import "flowbite";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path="/tutor/*" element={<LandingPage />} />
        <Route path="/admin/*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
