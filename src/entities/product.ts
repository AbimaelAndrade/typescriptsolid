import { CartItemProtocol } from './protocols';

export class Product implements CartItemProtocol {
  constructor(public name: string, public price: number) {}
}
