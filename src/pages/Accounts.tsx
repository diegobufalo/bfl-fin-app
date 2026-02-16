import styled from "styled-components";
import { Card } from "../components/UI/Card";

// const Card = styled.div`
//   background: white;
//   border-radius: 16px;
//   padding: 24px;
//   margin-bottom: 24px;
// `;

const Accounts = () => {
  return (
    <>
      <h1>🏦 Contas</h1>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div>Ativos</div>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>R$ 4.500,00</div>
          </div>
          <div>
            <div>Dívidas</div>
            <div style={{ fontSize: "32px", fontWeight: 700 }}>R$ 0,00</div>
          </div>
        </div>
      </Card>

      <Card>
        <h3>Cartões de Crédito</h3>
        <p>platinum • Nubank • Vence: 19/12/2025</p>
      </Card>

      <Card>
        <h3>Contas Bancárias</h3>
        <p>Nubank Conta • R$ 4.500,00</p>
      </Card>
    </>
  );
};

export default Accounts;
