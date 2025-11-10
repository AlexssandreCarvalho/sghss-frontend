import React, { useState } from "react";
import Input from "../components/Input";
import { validaCPF } from "../components/CPFUtils";
import { Link } from "react-router-dom";

export default function CadastroPaciente() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!nome || !cpf || !dataNascimento) {
      setError("Preencha todos os campos.");
      return;
    }
    if (!validaCPF(cpf)) {
      setError("CPF inválido.");
      return;
    }
    console.log("Cadastro:", { nome, cpf, dataNascimento });
    setSuccess("Paciente cadastrado com sucesso!");
    setNome(""); setCpf(""); setDataNascimento("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-lg bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Cadastrar Paciente</h1>
        <form onSubmit={handleSubmit}>
          {error && <div className="mb-3 text-red-600">{error}</div>}
          {success && <div className="mb-3 text-green-600">{success}</div>}
          <Input id="nome" label="Nome" value={nome} onChange={(e)=>setNome(e.target.value)} required />
          <Input id="cpf" label="CPF" value={cpf} onChange={(e)=>setCpf(e.target.value)} required />
          <Input id="dataNascimento" label="Data de Nascimento" type="date" value={dataNascimento} onChange={(e)=>setDataNascimento(e.target.value)} required />
          <div className="flex gap-2 mt-2">
            <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded-md">Cadastrar</button>
            <Link to="/login" className="py-2 px-4 border rounded-md">Voltar</Link>
          </div>
        </form>
      </section>
    </main>
  );
}
