import { CartItemProtocol } from "./cart-item.protocol";

export interface ShoppingCartProtocol {

  addItem(item: CartItemProtocol): void;

  removeItem(index: number): void;

  items: CartItemProtocol[];

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
