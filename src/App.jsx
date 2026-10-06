import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MenuPrincipal from "./pages/MenuPrincipal";
import Monitoramento from "./pages/Monitoramento";
import Historico from "./pages/Historico";
import DetalhesDispositivo from "./pages/DetalhesDispositivo";
import Alertas from "./pages/Alertas";

function App() {
  const [tela, setTela] = useState("login");
  const [dispositivoSelecionado, setDispositivoSelecionado] = useState(null);
  const [segurancaAtiva, setSegurancaAtiva] = useState(true);

  return (
    <>
      {tela === "login" && (
        <Login
          onCadastro={() => setTela("cadastro")}
          onEntrar={() => setTela("menu")}
        />
      )}

      {tela === "cadastro" && (
        <Cadastro
          onLogin={() => setTela("login")}
        />
      )}

      {tela === "menu" && (
        <MenuPrincipal
          onMonitoramento={() => setTela("monitoramento")}
          onHistorico={() => setTela("historico")}
          onDetalhes={() => setTela("detalhes")}
          segurancaAtiva={segurancaAtiva}
          onAlertas={() => setTela("alertas")}
        />
      )}

      {tela === "monitoramento" && (
        <Monitoramento
          onVoltar={() => setTela("menu")}
          onDetalhes={(dispositivo) => {
            setDispositivoSelecionado(dispositivo);
            setTela("detalhes");
          }}
          segurancaAtiva={segurancaAtiva}
          setSegurancaAtiva={setSegurancaAtiva}
        />
      )}

      {tela === "historico" && (
        <Historico
          onVoltar={() => setTela("menu")}
        />
      )}

      {tela === "detalhes" && (
        <DetalhesDispositivo
          dispositivo={dispositivoSelecionado}
          onVoltar={() => setTela("monitoramento")}
        />
      )}

      {tela === "alertas" && (
        <Alertas
          onVoltar={() => setTela("menu")}
        />
      )}
    </>
  );
}

export default App;