import { PieChart, Pie, ResponsiveContainer, Sector, LabelList, type LabelProps, Label } from "recharts";
import { Card } from "../components/UI/Card";
import { Container } from "./styles/categories";

const categoryData = [
  { name: "Moradia", value: 1500, color: "#F97316" },
  { name: "Alimentação", value: 668, color: "#A855F7" },
  { name: "Utilidades", value: 180, color: "#22C55E" },
];

const Categories = () => {
  const MyCustomLabel = (props: LabelProps) => <Label {...props} fill={props.color} position="outside" offset={10} />;

  return (
    <Container>
      <h1>📂 Categorias</h1>
      <Card>
        <div className="category-resume">
          <div className="category-balance">R$ 2.815,05</div>
          <div className="resume-date">spent in Janeiro de 2026</div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              shape={(props) => {
                const { payload } = props; // payload = your data entry
                const fill = payload?.color ?? "#8884d8";
                return <Sector {...props} fill={fill} />;
              }}
            >
              <LabelList dataKey="name" content={MyCustomLabel} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default Categories;
