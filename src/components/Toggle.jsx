import { useState } from "react";

function Toggle({ label = "Segurança" }) {
  const [ativo, setAtivo] = useState(false);

  return (
    <div className="toggle-container">
      <div className="toggle-info">
        <span className="toggle-label">{label}</span>

        <span className={ativo ? "toggle-status active" : "toggle-status"}>
          {ativo ? "Ativado" : "Desativado"}
        </span>
      </div>

      <button
        type="button"
        className={ativo ? "toggle active" : "toggle"}
        onClick={() => setAtivo(!ativo)}
        aria-label={`Alternar ${label}`}
        aria-pressed={ativo}
      >
        <span className="toggle-circle"></span>
      </button>
    </div>
  );
}

export default Toggle;