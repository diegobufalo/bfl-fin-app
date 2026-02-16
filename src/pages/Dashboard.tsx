import { TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "../components/UI/Card";
import { useAuth } from "../contexts/AuthContext";

// const Card = styled.div`
//   background: white;
//   border-radius: 16px;
//   padding: 24px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//   margin-bottom: 24px;
// `;

const data = [
  { day: "1", este: 1200, passado: 800 },
  { day: "5", este: 1105, passado: 2890 },
  { day: "10", este: 2500, passado: 3100 },
  { day: "15", este: 4200, passado: 3800 },
  { day: "20", este: 6100, passado: 5200 },
  { day: "25", este: 7800, passado: 6500 },
  { day: "31", este: 8100, passado: 7200 },
];

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <h1>
        Bem-vindo de volta, <span style={{ color: "#6366F1" }}>{user?.name}</span>
      </h1>
      <p style={{ color: "#64748B", marginBottom: "32px" }}>Aqui está uma visão geral das suas finanças</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
        {/* Ritmo de Gastos */}
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "13px", color: "#64748B" }}>RITMO DE GASTOS</div>
              <div style={{ fontSize: "32px", fontWeight: 700 }}>
                R$ 1.105 <span style={{ color: "#22C55E" }}>abaixo</span>
              </div>
            </div>
            <TrendingUp size={40} color="#22C55E" />
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="natural" dataKey="este" stroke="#6366F1" strokeWidth={3} />
              <Line type="natural" dataKey="passado" stroke="#CBD5E1" strokeWidth={3} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Patrimônio */}
        <Card>
          <div>PATRIMÔNIO</div>
          <div style={{ fontSize: "32px", fontWeight: 700 }}>R$ 4.500,00</div>
          <div style={{ color: "#22C55E" }}>+R$4.5k (+100%)</div>
          <div style={{ textAlign: "center", marginTop: "40px", color: "#94A3B8" }}>Dados disponíveis após 7 dias</div>
        </Card>
      </div>

      {/* Resultado Parcial + Categorias */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "24px" }}>
        <Card>
          <div>RESULTADO PARCIAL</div>
          <div style={{ fontSize: "32px", fontWeight: 700 }}>R$ 2.184,95</div>
          <div style={{ color: "#EF4444" }}>-58.2%</div>
        </Card>

        <Card>
          <div>PRINCIPAIS CATEGORIAS</div>
          {/* lista com barras - pode expandir depois */}
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
