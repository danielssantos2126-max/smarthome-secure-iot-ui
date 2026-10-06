import { useState } from "react";
import logo from "../assets/logo.png";

function Cadastro({ onLogin }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha,
        }),
      });

      if (!resposta.ok) {
        if (resposta.status === 409) {
          throw new Error("EMAIL_EXISTENTE");
        }

        throw new Error("Erro ao criar a conta.");
      }

      const usuario = await resposta.json();

      console.log("Usuário cadastrado:", usuario);
      alert("Conta criada com sucesso!");

    } catch (erro) {
      console.error(erro);

      if (erro.message === "EMAIL_EXISTENTE") {
        alert("Este e-mail já está cadastrado.");
      } else {
        alert("Não foi possível criar a conta.");
      }
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">

        <div className="login-logo">
          <img
            src={logo}
            alt="Logo SmartHome Secure"
            className="logo"
          />

          <h1>SmartHome Secure</h1>
        </div>

        <div className="login-header">
          <h2>Criar conta</h2>
          <p>Cadastre-se para utilizar o SmartHome Secure.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Nome completo</label>

            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone</label>

            <input
              type="tel"
              id="phone"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>

            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirmar senha
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Criar conta
          </button>

        </form>

        <div className="register-link">
          <span>Já possui uma conta?</span>

          <button type="button" onClick={onLogin}>
            Entrar
          </button>
        </div>

      </section>
    </main>
  );
}

export default Cadastro;