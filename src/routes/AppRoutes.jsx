import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import CadastroPaciente from "../pages/CadastroPaciente";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<div className="p-8">Página não encontrada</div>} />
    </Routes>
  );
}
