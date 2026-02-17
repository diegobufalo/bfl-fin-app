import { Card } from "../components/UI/Card";
import type { RecurringItem } from "../types";

const mockRecurrents: RecurringItem[] = [
  { name: "Google One", icon: "🔵", amount: 6.99, dueDate: "QUA, JAN 7" },
  { name: "iCloud", icon: "☁️", amount: 3.5, dueDate: "QUI, JAN 15" },
  { name: "Spotify", icon: "🎵", amount: 21.9, dueDate: "TER, JAN 20" },
  { name: "Netflix", icon: "🎥", amount: 55.9, dueDate: "SEX, JAN 23" },
  { name: "Disney+", icon: "🏰", amount: 33.9, dueDate: "SEX, JAN 23" },
];

const Recurrents = () => {
  return (
    <>
      <h1>🔄 Recorrentes</h1>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>R$ 122,19</div>
            <div>Falta pagar este mês</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>R$ 0,00</div>
            <div>Pago até agora</div>
          </div>
        </div>
      </Card>

      <Card>
        {mockRecurrents.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 0",
              borderTop: i > 0 ? "1px solid #E2E8F0" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "28px" }}>{item.icon}</span>
              <div>
                <div>{item.name}</div>
                <div style={{ fontSize: "13px", color: "#64748B" }}>{item.dueDate}</div>
              </div>
            </div>
            <div style={{ fontWeight: 600 }}>R$ {item.amount.toFixed(2)}</div>
          </div>
        ))}
      </Card>
    </>
  );
};

export default Recurrents;
