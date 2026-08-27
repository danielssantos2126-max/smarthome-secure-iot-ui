function MenuPrincipal({ onMonitoramento, segurancaAtiva }) {
  return (
    <main className="home-page">

      <header className="home-header">
        <div>
          <h1>SmartHome Secure</h1>
          <p>Segurança Autônoma da sua Casa</p>
        </div>

        <button className="profile-button">
          👤
        </button>
      </header>

      <section className="welcome-section">
        <h2>Olá, seja bem-vindo!</h2>
        <p>Como está a segurança da sua residência?</p>
      </section>

      <section className="security-card">
        <div>
          <span className="security-icon">🛡️</span>

          <div>
            <h3>Sistema de segurança</h3>
            <p>Todos os dispositivos estão protegidos.</p>
          </div>
        </div>

       <span className={segurancaAtiva ? "status-active" : "status-inactive"}>
  {segurancaAtiva ? "Ativado" : "Desativado"}
       </span>
      </section>

      <section className="menu-grid">

        <button
          className="menu-item"
          onClick={onMonitoramento}
        >
          <span>📊</span>
          <strong>Monitoramento</strong>
          <small>Acompanhar residência</small>
        </button>

        <button className="menu-item">
          <span>📹</span>
          <strong>Dispositivos</strong>
          <small>Gerenciar dispositivos</small>
        </button>

        <button className="menu-item">
          <span>🔔</span>
          <strong>Notificações</strong>
          <small>Ver alertas</small>
        </button>

        <button className="menu-item">
          <span>📜</span>
          <strong>Histórico</strong>
          <small>Consultar eventos</small>
        </button>

      </section>

    </main>
  );
}

export default MenuPrincipal;