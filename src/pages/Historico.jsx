function Historico({ onVoltar }) {
  return (
    <main className="historico-page">

      <header className="historico-header">

        <div>
          <h1>Histórico</h1>
          <p>Registro das atividades da sua residência</p>
        </div>
      </header>

      <section className="historico-card">

        <div className="historico-title">
          <span>📜</span>
          <div>
            <h2>Atividades recentes</h2>
            <p>Acompanhe os eventos registrados pelo sistema.</p>
          </div>
        </div>

        <div className="historico-vazio">
          <span>🕐</span>
          <h3>Nenhuma atividade registrada</h3>
          <p>
            Quando houver movimentações ou eventos de segurança,
            eles aparecerão aqui.
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

export default Historico;