import "./App.css";
import "flowbite";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserRoutes from "../routes/UserRoutes";
import TutorRoutes from "../routes/TutorRoutes";
function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/tutor/*" element={<TutorRoutes />} />
        <Route path="/admin/*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
