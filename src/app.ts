// uomo/donna, relax, active, extreme, kids

import { Cliente, Pagamento } from "./cliente/cliente";
import { ProcessoProduzione } from "./processo/processo";
import { Prodotto, Stato, Taglia, Type } from "./prodotto/prodotto";

// Istanzia alcuni oggetti Prodotto
const prodotti: Prodotto[] = [
  new Prodotto(Type.CAPPELLO, 0, Taglia.S, 'nero', Stato.DISPONIBILE),
  new Prodotto(Type.CAPPELLO, 0, Taglia.M, 'verde', Stato.DISPONIBILE),
  new Prodotto(Type.CAPPELLO, 0, Taglia.L, 'giallo', Stato.ESAURITO),
  new Prodotto(Type.COSTUME, 0, Taglia.S, 'nero', Stato.DISPONIBILE),
  new Prodotto(Type.COSTUME, 0, Taglia.M, 'nero', Stato.DISPONIBILE),
  new Prodotto(Type.PAREO, 0, Taglia.S, 'nero', Stato.DISPONIBILE),
  new Prodotto(Type.PAREO, 0, Taglia.M, 'verde', Stato.DISPONIBILE),
  new Prodotto(Type.PAREO, 0, Taglia.L, 'giallo', Stato.ESAURITO),
];

// Istanzia oggetti Cliente
const clienti: Cliente[] = [
  new Cliente('marco', 'verdi', 'marco.verdi@gmail.it', Pagamento.CARTA),
  new Cliente('luca', 'neri', 'luca.neri@gmail.it', Pagamento.CARTA),
  new Cliente('maria', 'rossi', 'maria.rossi@gmail.it', Pagamento.CONTANTI),
  new Cliente('simona', 'gialli', 'simona.gialli@gmail.it', Pagamento.CARTA)
];

// Crea più istanze della classe ProcessoProduzione
const processoProduzione: ProcessoProduzione[] = [
  new ProcessoProduzione('metodoA', 'descrizione del metodo A'),
  new ProcessoProduzione('metodoB', 'descrizione del metodo B')
];

// ...aggiungendo i prodotti istanziati al processo
processoProduzione[0].aggiungiProdotto(prodotti[0])
processoProduzione[0].aggiungiProdotto(prodotti[1])
processoProduzione[0].aggiungiProdotto(prodotti[2])
processoProduzione[0].aggiungiProdotto(prodotti[3])
processoProduzione[0].aggiungiProdotto(prodotti[4])
processoProduzione[1].aggiungiProdotto(prodotti[5])
processoProduzione[1].aggiungiProdotto(prodotti[6])
processoProduzione[1].aggiungiProdotto(prodotti[7])

// Testa la logica di ordinazione dei prodotti da parte dei clienti 
clienti[0].ordinaProdotto(prodotti[0]) // DISPONIBILE
clienti[1].ordinaProdotto(prodotti[2]) // ESAURITO

if(clienti[0].prodotto)
  prodotti[0].assegnaCliente(clienti[0]) // OK
if(clienti[1].prodotto)
  prodotti[2].assegnaCliente(clienti[1]) // NON VERRA' ESEGUITO

// e l'aggiunta di nuovi articoli ai processi di produzione.
// vedi righe 34-41