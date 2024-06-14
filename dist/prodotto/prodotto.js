"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prodotto = exports.Stato = exports.Taglia = exports.Type = void 0;
var Type;
(function (Type) {
    Type["COSTUME"] = "costume";
    Type["PAREO"] = "pareo";
    Type["CAPPELLO"] = "cappello";
})(Type || (exports.Type = Type = {}));
;
var Taglia;
(function (Taglia) {
    Taglia["S"] = "s";
    Taglia["M"] = "m";
    Taglia["L"] = "l";
    Taglia["XL"] = "xl";
})(Taglia || (exports.Taglia = Taglia = {}));
;
var Stato;
(function (Stato) {
    Stato[Stato["DISPONIBILE"] = 0] = "DISPONIBILE";
    Stato[Stato["ESAURITO"] = 1] = "ESAURITO";
})(Stato || (exports.Stato = Stato = {}));
;
;
class Prodotto {
    constructor(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
        this.ordinato = false;
    }
    assegnaCliente(cliente) {
        // assegna cliente a un prodotto
        this.cliente = cliente;
        this.ordinato = true;
        console.log('Cliente assegnato al prodotto ordinato');
    }
}
exports.Prodotto = Prodotto;
