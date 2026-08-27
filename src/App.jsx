import { useState } from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MenuPrincipal from "./pages/MenuPrincipal";
import Monitoramento from "./pages/Monitoramento";

function App() {
  const [tela, setTela] = useState("login");

  // Estado do sistema de segurança
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
          segurancaAtiva={segurancaAtiva}
        />
      )}

      {tela === "monitoramento" && (
        <Monitoramento
          onVoltar={() => setTela("menu")}
          segurancaAtiva={segurancaAtiva}
          setSegurancaAtiva={setSegurancaAtiva}
        />
      )}
    </>
  );
}

export default App;