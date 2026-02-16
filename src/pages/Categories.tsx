import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card } from "../components/UI/Card";

// const Card = styled.div`
//   background: white;
//   border-radius: 16px;
//   padding: 24px;
// `;

const categoryData = [
  { name: "Moradia", value: 1500, color: "#F97316" },
  { name: "Alimentação", value: 668, color: "#A855F7" },
  { name: "Utilidades", value: 180, color: "#22C55E" },
];

const Categories = () => {
  return (
    <>
      <h1>📂 Categorias</h1>
      <Card>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "42px", fontWeight: 700 }}>R$ 2.815,05</div>
          <div>spent in Janeiro de 2026</div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90}>
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default Categories;
