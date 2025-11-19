import administrativo from "../assets/administrativo.png";
import bancos from "../assets/bancos.png";
import fiscal from "../assets/fiscal.png";
import pm from "../assets/pm.png";
import policial from "../assets/policial.png";
import tribunais from "../assets/tribunais.png";

export default function Concursos() {
  return (
    <div className="concursos">
      <h1>Cursos Preparatórios</h1>

      <div className="cards">

        <div className="card">
          <img src={policial} alt="Polícia Civil" />
          <h3>Polícia Civil</h3>
          <p>Curso completo para Polícia Civil.</p>
        </div>

        <div className="card">
          <img src={pm} alt="Polícia Militar" />
          <h3>Polícia Militar</h3>
          <p>Preparação intensiva para PM.</p>
        </div>

        <div className="card">
          <img src={fiscal} alt="Área Fiscal" />
          <h3>Área Fiscal</h3>
          <p>Conteúdo focado em concursos fiscais.</p>
        </div>

        <div className="card">
          <img src={administrativo} alt="Área Administrativa" />
          <h3>Área Administrativa</h3>
          <p>Preparação para órgãos administrativos.</p>
        </div>

        <div className="card">
          <img src={tribunais} alt="Tribunais" />
          <h3>Tribunais</h3>
          <p>TRE, TRT, TJ e outros tribunais.</p>
        </div>

        <div className="card">
          <img src={bancos} alt="Bancos" />
          <h3>Bancos</h3>
          <p>Curso para Banco do Brasil e Caixa.</p>
        </div>

      </div>
    </div>
  );
}
