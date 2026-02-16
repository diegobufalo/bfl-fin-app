import { useState } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import { useTransactions } from "../contexts/TransactionContext";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 480px;
  border-radius: 20px;
  padding: 32px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 16px;
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
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background: #4f46e5;
  }
`;

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Restaurantes", color: "#A855F7" },
  { name: "Energia elétrica", color: "#22C55E" },
  { name: "Postos de combustível", color: "#F97316" },
  { name: "Delivery", color: "#A855F7" },
  { name: "Supermercado", color: "#A855F7" },
  { name: "Internet", color: "#22C55E" },
  { name: "Saúde", color: "#EF4444" },
  { name: "Moradia", color: "#F97316" },
];

const NewTransactionModal = ({ isOpen, onClose }: NewTransactionModalProps) => {
  const { addTransaction } = useTransactions();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(categories[0].name);
  const [account, setAccount] = useState("Nubank Conta");
  const [date, setDate] = useState("04/01/2026");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCat = categories.find((c) => c.name === category)!;

    addTransaction({
      description,
      category,
      categoryColor: selectedCat.color,
      account,
      date,
      value: parseFloat(value),
    });

    onClose();
    // limpa formulário
    setDescription("");
    setValue("");
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={28} />
        </CloseButton>

        <h2 style={{ marginBottom: "24px" }}>Nova Transação</h2>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Descrição (ex: Aluguel)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Input
            type="number"
            placeholder="Valor (ex: 1500.00)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />

          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </Select>

          <Select value={account} onChange={(e) => setAccount(e.target.value)}>
            <option value="Nubank Conta">Nubank Conta</option>
            <option value="platinum">Cartão Platinum</option>
          </Select>

          <Input
            type="text"
            placeholder="Data (DD/MM/AAAA)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <Button type="submit">Salvar Transação</Button>
        </form>
      </ModalContent>
    </Overlay>
  );
};

export default NewTransactionModal;
