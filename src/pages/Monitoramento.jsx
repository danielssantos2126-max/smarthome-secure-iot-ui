import { useEffect, useState } from "react";
import DispositivoCard from "../components/DispositivoCard";

function Monitoramento({ onVoltar, onDetalhes, segurancaAtiva, setSegurancaAtiva }) {

const [dispositivos, setDispositivos] = useState([]);

useEffect(() => {
  fetch("http://localhost:8080/dispositivos")
    .then((resposta) => resposta.json())
    .then((dados) => {
      setDispositivos(dados);
    })
    .catch((erro) => {
      console.error("Erro ao buscar dispositivos:", erro);
    });
}, []);

  function alternarSeguranca() {
    setSegurancaAtiva(!segurancaAtiva);
  }

  return (
    <main className="monitor-page">

      <header className="monitor-header">
        
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
      <section className="monitor-devices">
        <div className="dispositivos-grid">
        {dispositivos.map((dispositivo) => (
        
        <DispositivoCard
        key={dispositivo.id}
       dispositivo={dispositivo}
        onDetalhes={onDetalhes}
       />
       ))}
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

    <button
      type="button"
      className="back-button mobile-back-button"
      onClick={onVoltar}
    >
  ← Voltar
</button>

    </main>
  );
}

export default Monitoramento;