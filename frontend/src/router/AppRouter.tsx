import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Pantry from "../features/pantry/pages/Pantry";
import Auth from "../features/Auth/pages/Auth";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AppRouter;
