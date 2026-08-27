import logo from "../assets/logo.png";

function Cadastro({ onLogin }) {
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

        <form className="login-form">

          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Digite seu telefone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
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