import logo from "../assets/logo.png";

function Login({ onCadastro, onEntrar }) {
  return (
    <main className="login-page">
      <section className="login-card">

        <div className="login-logo">
            <img src={logo} alt="Logo SmartHome Secure" className="logo" />
          <h1>SmartHome Secure</h1>
          <p>Segurança Autônoma da sua Casa</p>
        </div>

        <div className="login-header">
          <h2>Bem-vindo!</h2>
          <p>Entre na sua conta para continuar.</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
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

          <div className="forgot-password">
            <button type="button">Esqueceu sua senha?</button>
          </div>

        <button
            type="button"
            className="login-button"
            onClick={onEntrar}>
  Entrar
        </button>
        </form>

        <div className="register-link">
          <span>Não possui uma conta?</span>
          <button type="button" onClick={onCadastro}>Cadastre-se
          </button>
        </div>

      </section>
    </main>
  );
}

export default Login;