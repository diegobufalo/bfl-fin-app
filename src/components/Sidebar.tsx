import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

import styled from "styled-components";
import {
  Home,
  CreditCard,
  TrendingUp,
  Building2,
  PieChart,
  Repeat,
  FolderOpen,
  FileText,
  HelpCircle,
  Settings,
} from "lucide-react";
import { useAuth, useTheme } from "../contexts/types";

const SidebarContainer = styled.aside<{ mobileOpen: boolean }>`
  width: 280px;
  background: white;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  padding: 24px 16px;
  z-index: 99;

  @media (max-width: 1024px) {
    transform: ${({ mobileOpen }) => (mobileOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 48px;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  margin-bottom: 4px;
  transition: all 0.2s;

  &.active {
    background: #f0f9ff;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  &:hover {
    background: #f8fafc;
  }
`;

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const Sidebar = ({ mobileOpen, setMobileOpen }: SidebarProps) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const menu = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/transactions", icon: CreditCard, label: "Transações" },
    { to: "/cashflow", icon: TrendingUp, label: "Fluxo de Caixa" },
    { to: "/accounts", icon: Building2, label: "Contas" },
    { to: "/networth", icon: PieChart, label: "Patrimônio" },
    { to: "/recurrents", icon: Repeat, label: "Recorrentes" },
    { to: "/categories", icon: FolderOpen, label: "Categorias" },
    { to: "/reports", icon: FileText, label: "Relatórios" },
  ];

  return (
    <SidebarContainer mobileOpen={mobileOpen}>
      <Logo>BFL Fin</Logo>
      {menu.map((item) => (
        <MenuItem key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
          <item.icon size={20} />
          {item.label}
        </MenuItem>
      ))}
      <div style={{ marginTop: "auto", paddingTop: "40px" }}>
        <MenuItem to="#" style={{ color: "#64748B" }}>
          <HelpCircle size={20} /> Suporte
        </MenuItem>
        <MenuItem to="#" style={{ color: "#64748B" }}>
          <Settings size={20} /> Configurações
        </MenuItem>
      </div>
      <MenuItem
        to={""}
        as="button"
        onClick={toggleTheme}
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "100%",
          textAlign: "left",
        }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
        {isDark ? "Modo Claro" : "Modo Escuro"}
      </MenuItem>
      {user && (
        <MenuItem to={"/"} as="button" onClick={logout} style={{ color: "#EF4444", marginTop: "20px" }}>
          Sair da conta
        </MenuItem>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
