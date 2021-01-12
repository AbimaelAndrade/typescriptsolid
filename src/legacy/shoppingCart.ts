type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  chekout(): void {
    if (this.isEmpty()) {
      console.log('this cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Your cart with total ${this.total()} was received`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Send message ${msg}`);
  }

  saveOrder(): void {
    console.log(`Your order was saved`);
  }

  clear(): void {
    console.log(`Shopping cart was cleaned with success`);
    this._items.length = 0;
  }
}
