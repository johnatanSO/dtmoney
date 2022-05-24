import { Container } from "./styles";
import entradasImg from "../../assets/Entradas.svg";
import saidasImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {

  const {transactions} = useTransactions();


  const summary = transactions.reduce((acumulator, transaction) =>{
    if(transaction.type==='entrada'){
      acumulator.entradas += transaction.amount;
      acumulator.total += transaction.amount
    }
    else if(transaction.type==='saida'){
      acumulator.saidas += transaction.amount
      acumulator.total -= transaction.amount
    }
    return acumulator
    
  }, {
    entradas: 0,
    saidas: 0,
    total: 0
  })


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.entradas)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.saidas)}</strong>
      </div>

      <div className="highlight-content">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}</strong>
      </div>
    </Container>
  );
}
