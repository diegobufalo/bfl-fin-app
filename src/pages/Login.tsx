import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1, #a855f7);
`;

const LoginCard = styled.div`
  background: white;
  padding: 48px 40px;
  border-radius: 24px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  margin: 12px 0;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("diego@fin.com");
  const [password, setPassword] = useState("123123");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (login(email, password)) {
      navigate("/");
    } else {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <Container>
      <LoginCard>
        <h1 style={{ fontSize: "42px", marginBottom: "8px" }}>BFL Fin</h1>
        <p style={{ color: "#64748B", marginBottom: "32px" }}>Entre na sua conta</p>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="diego@fin.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red", margin: "8px 0" }}>{error}</p>}

          <Button type="submit">Entrar</Button>
        </form>
      </LoginCard>
    </Container>
  );
};

export default Login;
