import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "../components/UI/Card";

const netWorthData = [
  { date: "28/12", value: 19500 },
  { date: "29/12", value: 19700 },
  { date: "30/12", value: 19800 },
  { date: "31/12", value: 19900 },
  { date: "01/01", value: 20200 },
  { date: "02/01", value: 20540 },
];

const NetWorth = () => {
  return (
    <>
      <h1>📈 Patrimônio</h1>
      <Card>
        <div>PATRIMÔNIO LÍQUIDO</div>
        <div style={{ fontSize: "42px", fontWeight: 700 }}>R$ 20.540,00</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={netWorthData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="natural" dataKey="value" stroke="#6366F1" strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default NetWorth;
