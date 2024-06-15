import { IProduct, State } from "../product/product"

export enum Payment {
  CARD = 'card',
  CASH = 'cash'
};

export interface IClient {
  name: string,
  surname: string,
  email: string,
  paymentMethod: Payment
  orderProduct(product: IProduct): void
};

export class Client implements IClient {
  product!: IProduct
  constructor(
    public name: string, public surname: string, 
    public email: string, public paymentMethod: Payment
  ){}
  orderProduct(product: IProduct): void {
    // to order an available product
    if(product.state === State.AVAILABLE){
      this.product = product
      console.log('ordered product')
    }
    else
      console.log('product out of stock')
  }
}