import {
  MessageProtocol,
  OrderProtocol,
  OrderStatusProtocol,
  RepositoryProtocol,
  ShoppingCartProtocol
} from "./protocols";

export class Order implements OrderProtocol{
  private _orderStatus: OrderStatusProtocol = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly repository: RepositoryProtocol
  ){}

  get orderStatus(): OrderStatusProtocol {
    return this._orderStatus;
  }

  chekout(): void {
    if(this.cart.isEmpty()){
      console.log("this cart is empty");
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(`Your cart with total ${this.cart.total()} was received`);
    this.repository.saveOrder(this);
    this.cart.clear();
  }
}
