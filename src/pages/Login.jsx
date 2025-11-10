import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !senha) {
      setError("Preencha e-mail e senha.");
      return;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setError("Insira um e-mail válido.");
      return;
    }
    console.log("Login:", { email, senha });
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Conecte-se</h1>
        <form onSubmit={handleSubmit}>
          {error && <div className="mb-3 text-red-600">{error}</div>}
          <Input id="email" label="E-mail" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <Input id="senha" label="Senha" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} required />
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Entrar
          </button>
        </form>
        <div className="mt-4 text-sm">
          <Link to="/cadastro-paciente" className="text-indigo-600 hover:underline">Cadastrar Paciente</Link>
        </div>
      </section>
    </main>
  );
}
