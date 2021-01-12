import {
  CustomerProtocol,
  MessageProtocol,
  OrderProtocol,
  OrderStatusProtocol,
  RepositoryProtocol,
  ShoppingCartProtocol,
} from './protocols';

export class Order implements OrderProtocol {
  private _orderStatus: OrderStatusProtocol = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly repository: RepositoryProtocol,
    private readonly customer: CustomerProtocol,
  ) {}

  get orderStatus(): OrderStatusProtocol {
    return this._orderStatus;
  }

  chekout(): void {
    if (this.cart.isEmpty()) {
      console.log('this cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `
      Your cart was received,
      Customer: ${this.customer.getName()}
      Total: ${this.cart.total()}
      With discount: ${this.cart.totalWithDiscount()}
      `,
    );
    this.repository.saveOrder(this);
    this.cart.clear();
  }
}
