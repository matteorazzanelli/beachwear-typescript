import { Cliente, ICliente } from "../cliente/cliente";

export enum Type {
  COSTUME = 'costume',
  PAREO = 'pareo',
  CAPPELLO = 'cappello'
 };
 
 export enum Taglia {
   S = 's',
   M = 'm',
   L = 'l',
   XL = 'xl'
 };
 
 export enum Stato {
   DISPONIBILE, ESAURITO
 };

 export interface IProdotto {
  tipo: Type,
  id: number,
  taglia: Taglia,
  colore: string,
  stato: Stato,
  assegnaCliente(cliente: ICliente): void
};

export class Prodotto implements IProdotto{
  cliente!: ICliente
  ordinato: boolean
  constructor(
    public tipo: Type, public id: number, 
    public taglia: Taglia, public colore: string, 
    public stato: Stato
  ){
    this.ordinato = false;
  }
  assegnaCliente(cliente: ICliente): void {
    // assegna cliente a un prodotto
    this.cliente = cliente;
    this.ordinato = true;
    console.log('Cliente assegnato al prodotto ordinato')
  }
}