import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "../components/UI/Card";

const cashFlowData = [
  { month: "Nov 2025", income: 26000, expense: 15962, net: 10037 },
  { month: "Dez 2025", income: 8000, expense: 12000, net: -4000 },
  { month: "Jan 2026", income: 5000, expense: 2000, net: 3000 },
];

const CashFlow = () => {
  return (
    <>
      <h1>📊 Fluxo de Caixa</h1>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "13px", color: "#64748B" }}>RESULTADO LÍQUIDO</div>
            <div style={{ fontSize: "32px", fontWeight: 700, color: "#22C55E" }}>R$ 10.037,54</div>
          </div>
          <div style={{ color: "#22C55E" }}>+966.7%</div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cashFlowData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="net" fill="#22C55E" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default CashFlow;
