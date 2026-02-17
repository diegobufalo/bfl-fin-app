import { Card } from "../components/UI/Card";
import { Container } from "./styles/accounts";

const Accounts = () => {
  return (
    <Container>
      <h1>🏦 Contas</h1>
      <Card>
        <div className="balance-resume">
          <div>
            <div>Ativos</div>
            <div className="balance">R$ 4.500,00</div>
          </div>
          <div>
            <div>Dívidas</div>
            <div className="balance">R$ 0,00</div>
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
    </Container>
  );
};

export default Accounts;
