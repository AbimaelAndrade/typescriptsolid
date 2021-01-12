import { Discount } from './discount';
import { CartItemProtocol } from './protocols';
import { ShoppingCart } from './shoppingCart';

const createDiscountMock = () => {
  class DiscountMock extends Discount {}

  return new DiscountMock();
};
const createSut = () => {
  const discount = createDiscountMock();
  const sut = new ShoppingCart(discount);

  return {
    sut,
    discount,
  };
};

const createCartItemMock = (name: string, price: number) => {
  class CartItemMock implements CartItemProtocol {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discount } = createSut();
  const cartItem1 = createCartItemMock('Camiseta', 30);
  const cartItem2 = createCartItemMock('Calça', 60);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discount };
};

afterEach(() => jest.clearAllMocks());

describe('ShoppingCart', () => {
  it('Should be an empy cart when no product is added', () => {
    const { sut } = createSut();

    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should have two cart items', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
  });

  it('Should test total and total totalWithDiscount', () => {
    const { sut } = createSutWithProducts();

    expect(sut.total()).toBe(90);
    expect(sut.totalWithDiscount()).toBe(90);
  });

  it('Should add products and clear cart', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should remove products', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discount } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discount, 'calculate');
    sut.totalWithDiscount();

    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discount } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discount, 'calculate');
    sut.totalWithDiscount();

    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
