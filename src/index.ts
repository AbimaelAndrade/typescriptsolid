import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
  Order,
  Product,
  ShoppingCart,
  IndividualCustomer,
  EnterpriseCustomer,
} from './entities';
import { Message, Repository } from './infra';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
// const shoppingCart = new ShoppingCart(noDiscount);
const shoppingCart = new ShoppingCart();
const message = new Message();
const repository = new Repository();
// const customerIndividual = new IndividualCustomer(
//   'Fulando',
//   'Silva',
//   '999.999.999-99',
// );
const customerEnterprise = new EnterpriseCustomer(
  'ABC LTDA',
  '999.999.999/00001',
);
const order = new Order(shoppingCart, message, repository, customerEnterprise);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Calça', 89.91));
shoppingCart.addItem(new Product('T-Shirt', 25.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.chekout();
console.log(order.orderStatus);
