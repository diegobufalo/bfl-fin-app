import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
`;

const Main = styled.main`
  flex: 1;
  padding: 24px;
  margin-left: 280px;
  transition: margin-left 0.3s;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const Hamburger = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Container>
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* hamburger */}
      <Hamburger onClick={() => setMobileOpen(!mobileOpen)}>
        <Menu size={24} />
      </Hamburger>

      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
