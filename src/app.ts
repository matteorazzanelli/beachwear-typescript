// uomo/donna, relax, active, extreme, kids

import { Client, Payment } from "./client/client";
import { ProductionProcess } from "./process/process";
import { Product, State, Size, Type } from "./product/product";

// Instantiate come Product objects
const products: Product[] = [
  new Product(Type.HAT, 0, Size.S, 'black', State.AVAILABLE),
  new Product(Type.HAT, 0, Size.M, 'green', State.AVAILABLE),
  new Product(Type.HAT, 0, Size.L, 'yellow', State.OUT_OF_STOCK),
  new Product(Type.SWIMMING_SUIT, 0, Size.S, 'black', State.AVAILABLE),
  new Product(Type.SWIMMING_SUIT, 0, Size.M, 'black', State.AVAILABLE),
  new Product(Type.PAREO, 0, Size.S, 'black', State.AVAILABLE),
  new Product(Type.PAREO, 0, Size.M, 'green', State.AVAILABLE),
  new Product(Type.PAREO, 0, Size.L, 'yellow', State.OUT_OF_STOCK),
];

// Instantiate come Client objects
const clients: Client[] = [
  new Client('marco', 'verdi', 'marco.verdi@gmail.it', Payment.CARD),
  new Client('luca', 'neri', 'luca.neri@gmail.it', Payment.CARD),
  new Client('maria', 'rossi', 'maria.rossi@gmail.it', Payment.CASH),
  new Client('simona', 'gialli', 'simona.gialli@gmail.it', Payment.CARD)
];

// Create more tha 1 instance of class ProductionProcess
const productionProcess: ProductionProcess[] = [
  new ProductionProcess('methodA', 'description of method A'),
  new ProductionProcess('methodB', 'description of method B')
];

// ...add the instantiated products
productionProcess[0].addProduct(products[0])
productionProcess[0].addProduct(products[1])
productionProcess[0].addProduct(products[2])
productionProcess[0].addProduct(products[3])
productionProcess[0].addProduct(products[4])
productionProcess[1].addProduct(products[5])
productionProcess[1].addProduct(products[6])
productionProcess[1].addProduct(products[7])

// Test customers' product ordering logic 
clients[0].orderProduct(products[0]) // AVAILABLE
clients[1].orderProduct(products[2]) // OUT_OF_STOCK

if(clients[0].product)
  products[0].assignClient(clients[0]) // OK
if(clients[1].product)
  products[2].assignClient(clients[1]) // NO

// and adding new items to manufacturing processes.
// see again 34-41