"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.Pagamento = void 0;
const prodotto_1 = require("../prodotto/prodotto");
var Pagamento;
(function (Pagamento) {
    Pagamento["CARTA"] = "carta";
    Pagamento["CONTANTI"] = "contanti";
})(Pagamento || (exports.Pagamento = Pagamento = {}));
;
;
class Cliente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    ordinaProdotto(prodotto) {
        // per ordinare un prodotto disponibile
        if (prodotto.stato === prodotto_1.Stato.DISPONIBILE) {
            this.prodotto = prodotto;
            console.log('Prodotto ordinato');
        }
        else
            console.log('Prodotto non disponibile');
    }
}
exports.Cliente = Cliente;
