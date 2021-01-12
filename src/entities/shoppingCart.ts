import { Discount, NoDiscount } from './discount';
import { CartItemProtocol, ShoppingCartProtocol } from './protocols';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItemProtocol[] = [];

  constructor(private readonly discount: Discount = new NoDiscount()) {}

  addItem(item: CartItemProtocol): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItemProtocol>[] {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log(`Shopping cart was cleaned with success`);
    this._items.length = 0;
  }
}
