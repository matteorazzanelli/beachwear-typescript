import { IProdotto, Prodotto, Stato } from "../prodotto/prodotto"

export enum Pagamento {
  CARTA = 'carta',
  CONTANTI = 'contanti'
};

export interface ICliente {
  nome: string,
  cognome: string,
  email: string,
  metodoPagamento: Pagamento
  ordinaProdotto(prodotto: IProdotto): void
};

export class Cliente implements ICliente {
  prodotto!: IProdotto
  constructor(
    public nome: string, public cognome: string, 
    public email: string, public metodoPagamento: Pagamento
  ){}
  ordinaProdotto(prodotto: IProdotto): void {
    // per ordinare un prodotto disponibile
    if(prodotto.stato === Stato.DISPONIBILE){
      this.prodotto = prodotto
      console.log('Prodotto ordinato')
    }
    else
      console.log('Prodotto non disponibile')
  }
}