import React, { useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/Fechar.svg";
import entradasImg from "../../assets/Entradas.svg";
import saidasImg from "../../assets/Saidas.svg";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  
  const [type, setType] = useState('entrada');
  
  
  return (
    <Modal className="react-modal-content" overlayClassName="react-modal-overlay" isOpen={isOpen} onRequestClose={onRequestClose}>

    <button
      className="react-modal-close"
      onClick={onRequestClose}
      type="button">
    <img src={closeImg} alt="Fechar" />
    </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />


        <TransactionTypeContainer>
          <RadioBox 
          onClick={()=>{setType('entrada')}} 
          type="button"
          isActive={type === 'entrada'}
          activeColor="green"
          >
            <img src={entradasImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          onClick={()=>{setType('saida')}} 
          type="button"
          isActive={type === 'saida'}
          activeColor="red"
          >
            <img src={saidasImg} alt="Saídas" />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>


        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
