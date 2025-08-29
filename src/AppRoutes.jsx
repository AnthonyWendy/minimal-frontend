import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // cuidado: export default ou nomeado?
import Dashboard from "./pages/Dashboard/Dashboard";
import LayoutPages from "./layouts/LayoutPages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<LayoutPages />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
