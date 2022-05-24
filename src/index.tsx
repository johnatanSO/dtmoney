import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({

  models:{
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title:"Desenvolvimento de website",
          type: "entrada",
          category:"Desenvolvimento",
          amount:12000,
          date: new Date('2022-02-20 09:00:00'),
        },
        {
          id: 2,
          title:"Pagamento de boletos",
          type: "saida",
          category:"Pagamentos",
          amount: 110,
          date: new Date('2022-02-29 11:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all('transaction')
    });

    this.post("/transactions", (schema, request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);