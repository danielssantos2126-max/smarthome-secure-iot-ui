function Monitoramento({ onVoltar, segurancaAtiva, setSegurancaAtiva }) {


  function alternarSeguranca() {
    setSegurancaAtiva(!segurancaAtiva);
  }

  return (
    <main className="monitor-page">

      <header className="monitor-header">
        <button
          type="button"
          className="back-button"
          onClick={onVoltar}
        >
          ← Voltar
        </button>

        <div>
          <h1>Monitoramento</h1>
          <p>Residência principal</p>
        </div>
      </header>


      {/* Sistema de segurança */}
      <section className="monitor-status">

        <div className="monitor-status-icon">
          🛡️
        </div>

        <div className="monitor-status-content">
          <h2>
            {segurancaAtiva
              ? "Sistema protegido"
              : "Sistema desativado"}
          </h2>

          <p>
            {segurancaAtiva
              ? "Todos os dispositivos estão funcionando normalmente."
              : "O sistema de segurança está desativado."}
          </p>
        </div>

        <span
          className={
            segurancaAtiva
              ? "status-active"
              : "status-inactive"
          }
        >
          {segurancaAtiva ? "Ativado" : "Desativado"}
        </span>

      </section>


      {/* Dispositivos */}
      <section className="devices-section">

        <div className="section-title">
          <h2>Dispositivos</h2>

          <span>
            4 dispositivos
          </span>
        </div>

        <div className="devices-grid">

          {/* Sensor da porta */}
          <article className="device-card">

            <div className="device-icon">
              🚪
            </div>

            <div className="device-info">
              <h3>Sensor da porta</h3>

              <p>
                Entrada principal
              </p>
            </div>

            <span className="device-online">
              Online
            </span>

          </article>


          {/* Sensor da janela */}
          <article className="device-card">

            <div className="device-icon">
              🪟
            </div>

            <div className="device-info">
              <h3>Sensor da janela</h3>

              <p>
                Sala de estar
              </p>
            </div>

            <span className="device-online">
              Online
            </span>

          </article>


          {/* Câmera */}
          <article className="device-card">

            <div className="device-icon">
              📹
            </div>

            <div className="device-info">
              <h3>Câmera</h3>

              <p>
                Área externa
              </p>
            </div>

            <span className="device-online">
              Online
            </span>

          </article>


          {/* Alarme */}
          <article className="device-card">

            <div className="device-icon">
              🚨
            </div>

            <div className="device-info">
              <h3>Alarme</h3>

              <p>
                Sistema de segurança
              </p>
            </div>

            <span className="device-online">
              Online
            </span>

          </article>

        </div>

      </section>


      {/* Controle de segurança */}
      <section className="security-control">

        <div>
          <h2>Controle de segurança</h2>

          <p>
            Ative ou desative o sistema de segurança.
          </p>
        </div>

        <div className="security-toggle-area">

          <div className="security-toggle-text">
            <strong>
              Sistema de segurança
            </strong>

            <span
              className={
                segurancaAtiva
                  ? "toggle-text-active"
                  : "toggle-text-inactive"
              }
            >
              {segurancaAtiva
                ? "Ativado"
                : "Desativado"}
            </span>
          </div>

          <button
            type="button"
            className={
              segurancaAtiva
                ? "security-toggle active"
                : "security-toggle"
            }
            onClick={alternarSeguranca}
            aria-label="Ativar ou desativar sistema de segurança"
            aria-pressed={segurancaAtiva}
          >
            <span className="security-toggle-circle"></span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default Monitoramento;