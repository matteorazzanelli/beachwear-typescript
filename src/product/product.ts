import { Client, IClient } from "../client/client";

export enum Type {
  SWIMMING_SUIT = 'swimming suit',
  PAREO = 'pareo',
  HAT = 'hat'
 };
 
 export enum Size {
   S = 's',
   M = 'm',
   L = 'l',
   XL = 'xl'
 };
 
 export enum State {
   AVAILABLE, OUT_OF_STOCK
 };

 export interface IProduct {
  type: Type,
  id: number,
  size: Size,
  color: string,
  state: State,
  assignClient(client: IClient): void
};

export class Product implements IProduct{
  client!: IClient
  ordered: boolean
  constructor(
    public type: Type, public id: number, 
    public size: Size, public color: string, 
    public state: State
  ){
    this.ordered = false;
  }
  assignClient(client: IClient): void {
    // assign a client to a product
    this.client = client;
    this.ordered = true;
    console.log('Customer assigned to the ordered product')
  }
}