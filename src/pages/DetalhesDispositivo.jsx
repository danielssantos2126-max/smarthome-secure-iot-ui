import { useState } from "react";

function DetalhesDispositivo({ dispositivo, onVoltar }) {

  const [dispositivoAtual, setDispositivoAtual] = useState(dispositivo);

  const alternarDispositivo = async () => {
    if (!dispositivoAtual) return;

    try {
      const resposta = await fetch(
        `http://localhost:8080/dispositivos/${dispositivoAtual.id}/toggle`,
        {
          method: "PUT",
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao alternar dispositivo.");
      }

      const dispositivoAtualizado = await resposta.json();

      setDispositivoAtual(dispositivoAtualizado);

    } catch (erro) {
      console.error(erro);
      alert("Não foi possível alterar o dispositivo.");
    }
  };

  return (
    <main className="detalhes-page">

      <header className="detalhes-header">

        <div>
          <h1>Detalhes do Dispositivo</h1>
          <p>Informações do dispositivo da sua residência</p>
        </div>

      </header>

      <section className="detalhes-card">

        <div
  className={`detalhes-icon ${
    dispositivoAtual?.tipo === "Lâmpada"
      ? "detalhes-lampada"
      : dispositivoAtual?.tipo === "Camera"
      ? "detalhes-camera"
      : dispositivoAtual?.tipo === "Sensor"
      ? "detalhes-sensor"
      : dispositivoAtual?.tipo === "Fechadura"
      ? "detalhes-fechadura"
      : ""
  }`}
>
  {dispositivoAtual?.tipo === "Lâmpada" && "💡"}
  {dispositivoAtual?.tipo === "Fechadura" && "🔒"}
  {dispositivoAtual?.tipo === "Camera" && "📹"}
  {dispositivoAtual?.tipo === "Sensor" && "🚨"}
</div>

        <h2>
          {dispositivoAtual?.nome || "Dispositivo"}
        </h2>

        <p className="detalhes-tipo">
          {dispositivoAtual?.tipo || "Tipo não informado"}
        </p>

        <div className="detalhes-info">

          <div className="info-item">
            <span>ID</span>

            <strong>
              {dispositivoAtual?.id || "-"}
            </strong>
          </div>

          <div className="info-item">
            <span>Status</span>

            <strong>
              {dispositivoAtual
                ? dispositivoAtual.ligado
                  ? "🟢 Ligado"
                  : "⚪ Desligado"
                : "-"}
            </strong>
          </div>

        </div>

        <button
          className="controle-button"
          onClick={alternarDispositivo}
          disabled={!dispositivoAtual}
        >
          {dispositivoAtual?.ligado
            ? "🔴 Desligar dispositivo"
            : "🟢 Ligar dispositivo"}
        </button>

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

export default DetalhesDispositivo;