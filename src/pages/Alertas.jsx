function Alertas({ onVoltar }) {
  return (
    <main className="alertas-page">

      <header className="alertas-header">

        <div>
          <h1>Alertas de Segurança</h1>
          <p>Confira os eventos de segurança da sua residência</p>
        </div>

      </header>

      <section className="alertas-card">

        <div className="alertas-title">
          <span>🚨</span>

          <div>
            <h2>Alertas recentes</h2>
            <p>Acompanhe possíveis eventos de segurança.</p>
          </div>
        </div>

        <div className="alerta-vazio">
          <span>🛡️</span>
          <h3>Nenhum alerta registrado</h3>
          <p>
            Quando houver algum evento de segurança,
            ele aparecerá aqui.
          </p>
        </div>

      </section>

      <button
       type="button"
       className="back-button mobile-back-button"
       onClick={onVoltar}
        > ← Voltar
      </button>

    </main>
  );
}

export default Alertas;