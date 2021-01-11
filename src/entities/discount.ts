export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {}

export class FiftyPercentDiscount extends Discount {
  protected discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.1;
}
