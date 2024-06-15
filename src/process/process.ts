import { IProduct } from "../product/product";

interface IProductionProcess {
  name: string,
  description: string,
  products: IProduct[],
  addProduct(product: IProduct): void
};

export class ProductionProcess implements IProductionProcess {
  constructor(
    public name: string, public description: string,
    public products: IProduct[] = []
  ){}
  addProduct(product: IProduct): void {
    // per aggiungere un product al processo di produzione
    this.products.push(product);
    console.log('Added product ', product)
  }
}