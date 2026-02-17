import styled from "styled-components";
import { Search } from "lucide-react";
import { useState } from "react";
import NewTransactionModal from "../components/NewTransactionModal";
import { useTransactions } from "../contexts/types";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Th = styled.th`
  text-align: left;
  padding: 16px;
  background: #f8fafc;
  font-weight: 600;
  color: #64748b;
`;

const Td = styled.td`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Badge = styled.span<{ color: string }>`
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  background: ${(props) => props.color + "20"};
  color: ${(props) => props.color};
`;

const Transactions = () => {
  const { transactions } = useTransactions();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h1 style={{ display: "flex", alignItems: "center", gap: "12px" }}>💰 Transações</h1>

      <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <Search style={{ position: "absolute", left: 16, top: 14 }} size={20} color="#94A3B8" />
          <input
            type="text"
            placeholder="Buscar transações..."
            style={{ width: "100%", padding: "14px 16px 14px 48px", borderRadius: "12px", border: "1px solid #E2E8F0" }}
          />
        </div>
        <button style={{ padding: "12px 24px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
          Últimos 30 dias ↓
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <Th></Th>
            <Th>DESCRIÇÃO</Th>
            <Th>CATEGORIA</Th>
            <Th>CONTA</Th>
            <Th>DATA</Th>
            <Th>VALOR</Th>
            <Th>AÇÃO</Th>
          </tr>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              padding: "12px 24px",
              background: "#6366F1",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: 600,
            }}
          >
            + Nova Transação
          </button>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <Td>
                <input type="checkbox" />
              </Td>
              <Td>{t.description}</Td>
              <Td>
                <Badge color={t.categoryColor}>{t.category}</Badge>
              </Td>
              <Td>{t.account}</Td>
              <Td>{t.date}</Td>
              <Td style={{ fontWeight: 600, color: "#22C55E" }}>R$ {t.value.toFixed(2)}</Td>
              <Td>⋯</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <NewTransactionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Transactions;
