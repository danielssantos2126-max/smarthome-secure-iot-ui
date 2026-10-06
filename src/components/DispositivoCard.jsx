function DispositivoCard({ dispositivo, onDetalhes }) {
  return (
    <div className="dispositivo-card">

        <div
         className={`dispositivo-card-icon ${
         dispositivo.tipo === "Lâmpada"
         ? "icon-lampada"
         : dispositivo.tipo === "Camera"
         ? "icon-camera"
         : dispositivo.tipo === "Sensor"
         ? "icon-sensor"
         : dispositivo.tipo === "Fechadura"
         ? "icon-fechadura"
         : ""
         }`}
        >
      {dispositivo.tipo === "Lâmpada" && "💡"}
      {dispositivo.tipo === "Fechadura" && "🔒"}
      {dispositivo.tipo === "Camera" && "📹"}
      {dispositivo.tipo === "Sensor" && "🚨"}
    </div>

      <div className="dispositivo-card-info">
        <h3>{dispositivo.nome}</h3>

        <p>{dispositivo.tipo}</p>

        <span className={dispositivo.ligado ? "status-active" : "status-inactive"}>
          {dispositivo.ligado ? "🟢 Ligado" : "⚪ Desligado"}
        </span>
      </div>

      <button
        className="detalhes-button"
        onClick={() => onDetalhes(dispositivo)}
      >
        Ver detalhes →
      </button>

    </div>
  );
}

export default DispositivoCard;