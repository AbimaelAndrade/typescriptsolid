import {
  Order,
  Product,
  ShoppingCart
} from "./entities";
import { Message, Repository } from "./infra";

const shoppingCart = new ShoppingCart();
const message = new Message();
const repository = new Repository();
const order = new Order(shoppingCart, message, repository);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Calça',89.91));
shoppingCart.addItem(new Product('T-Shirt', 25.00));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.chekout()
console.log(order.orderStatus);
