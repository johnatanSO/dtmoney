import React, { useEffect } from "react";
import { Container } from "./styles";

import { api } from "../../services/api";



export default function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposito">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="retirada">- R$1.000</td>
            <td>Casa</td>
            <td>1/05/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
