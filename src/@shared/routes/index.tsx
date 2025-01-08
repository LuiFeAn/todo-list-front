import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import SignUp from "../../pages/signup";
import Todos from "../../pages/todo";
import NotFound from "../../pages/not-found";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
