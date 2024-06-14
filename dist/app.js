"use strict";
// uomo/donna, relax, active, extreme, kids
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente/cliente");
const processo_1 = require("./processo/processo");
const prodotto_1 = require("./prodotto/prodotto");
// Istanzia alcuni oggetti Prodotto
const prodotti = [
    new prodotto_1.Prodotto(prodotto_1.Type.CAPPELLO, 0, prodotto_1.Taglia.S, 'nero', prodotto_1.Stato.DISPONIBILE),
    new prodotto_1.Prodotto(prodotto_1.Type.CAPPELLO, 0, prodotto_1.Taglia.M, 'verde', prodotto_1.Stato.DISPONIBILE),
    new prodotto_1.Prodotto(prodotto_1.Type.CAPPELLO, 0, prodotto_1.Taglia.L, 'giallo', prodotto_1.Stato.ESAURITO),
    new prodotto_1.Prodotto(prodotto_1.Type.COSTUME, 0, prodotto_1.Taglia.S, 'nero', prodotto_1.Stato.DISPONIBILE),
    new prodotto_1.Prodotto(prodotto_1.Type.COSTUME, 0, prodotto_1.Taglia.M, 'nero', prodotto_1.Stato.DISPONIBILE),
    new prodotto_1.Prodotto(prodotto_1.Type.PAREO, 0, prodotto_1.Taglia.S, 'nero', prodotto_1.Stato.DISPONIBILE),
    new prodotto_1.Prodotto(prodotto_1.Type.PAREO, 0, prodotto_1.Taglia.M, 'verde', prodotto_1.Stato.DISPONIBILE),
    new prodotto_1.Prodotto(prodotto_1.Type.PAREO, 0, prodotto_1.Taglia.L, 'giallo', prodotto_1.Stato.ESAURITO),
];
// Istanzia oggetti Cliente
const clienti = [
    new cliente_1.Cliente('marco', 'verdi', 'marco.verdi@gmail.it', cliente_1.Pagamento.CARTA),
    new cliente_1.Cliente('luca', 'neri', 'luca.neri@gmail.it', cliente_1.Pagamento.CARTA),
    new cliente_1.Cliente('maria', 'rossi', 'maria.rossi@gmail.it', cliente_1.Pagamento.CONTANTI),
    new cliente_1.Cliente('simona', 'gialli', 'simona.gialli@gmail.it', cliente_1.Pagamento.CARTA)
];
// Crea più istanze della classe ProcessoProduzione
const processoProduzione = [
    new processo_1.ProcessoProduzione('metodoA', 'descrizione del metodo A'),
    new processo_1.ProcessoProduzione('metodoB', 'descrizione del metodo B')
];
// ...aggiungendo i prodotti istanziati al processo
processoProduzione[0].aggiungiProdotto(prodotti[0]);
processoProduzione[0].aggiungiProdotto(prodotti[1]);
processoProduzione[0].aggiungiProdotto(prodotti[2]);
processoProduzione[0].aggiungiProdotto(prodotti[3]);
processoProduzione[0].aggiungiProdotto(prodotti[4]);
processoProduzione[1].aggiungiProdotto(prodotti[5]);
processoProduzione[1].aggiungiProdotto(prodotti[6]);
processoProduzione[1].aggiungiProdotto(prodotti[7]);
// Testa la logica di ordinazione dei prodotti da parte dei clienti 
clienti[0].ordinaProdotto(prodotti[0]); // DISPONIBILE
clienti[1].ordinaProdotto(prodotti[2]); // ESAURITO
if (clienti[0].prodotto)
    prodotti[0].assegnaCliente(clienti[0]); // OK
if (clienti[1].prodotto)
    prodotti[2].assegnaCliente(clienti[1]); // NON VERRA' ESEGUITO
// e l'aggiunta di nuovi articoli ai processi di produzione.
// vedi righe 34-41
