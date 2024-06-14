import { IProdotto } from "../prodotto/prodotto";

interface IProcessoProduzione {
  nome: string,
  descrizione: string,
  prodotti: IProdotto[],
  aggiungiProdotto(prodotto: IProdotto): void
};

export class ProcessoProduzione implements IProcessoProduzione {
  constructor(
    public nome: string, public descrizione: string,
    public prodotti: IProdotto[] = []
  ){}
  aggiungiProdotto(prodotto: IProdotto): void {
    // per aggiungere un prodotto al processo di produzione
    this.prodotti.push(prodotto);
    console.log('Aggiunto prodotto ', prodotto)
  }
}