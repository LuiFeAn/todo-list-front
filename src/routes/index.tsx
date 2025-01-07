import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;
