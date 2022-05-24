import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/Fechar.svg";
import entradasImg from "../../assets/Entradas.svg";
import saidasImg from "../../assets/Saidas.svg";
import { api } from "../../services/api";
import {useTransactions } from "../../hooks/useTransactions";


type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const {createTransaction} = useTransactions()
  
  const [type, setType] = useState('entrada');
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      type,
      category,
      amount,
            
    })
    setTitle('')
    setType('entrada')
    setAmount(0)
    setCategory('')
    onRequestClose();
  }
  
  
  return (
    <Modal className="react-modal-content" overlayClassName="react-modal-overlay" isOpen={isOpen} onRequestClose={onRequestClose}>

    <button
      className="react-modal-close"
      onClick={onRequestClose}
      type="button">
    <img src={closeImg} alt="Fechar" />
    </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input value={title} onChange={event=>setTitle(event.target.value)} type="text" placeholder="Título" />

        <input value={amount} onChange={event => setAmount(Number(event.target.value))} type="number" placeholder="Valor" />


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
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>


        <input value={category} onChange={event => setCategory(event.target.value)} type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
