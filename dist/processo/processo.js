"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoProduzione = void 0;
;
class ProcessoProduzione {
    constructor(nome, descrizione, prodotti = []) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti;
    }
    aggiungiProdotto(prodotto) {
        // per aggiungere un prodotto al processo di produzione
        this.prodotti.push(prodotto);
        console.log('Aggiunto prodotto ', prodotto);
    }
}
exports.ProcessoProduzione = ProcessoProduzione;
