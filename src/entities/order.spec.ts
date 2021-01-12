/* eslint-disable @typescript-eslint/no-empty-function */
import { Order } from './order';
import {
  CartItemProtocol,
  CustomerProtocol,
  MessageProtocol,
  OrderProtocol,
  RepositoryProtocol,
  ShoppingCartProtocol,
} from './protocols';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItemProtocol>[] {
    return [];
  }

  addItem(item: CartItemProtocol): void {}
  removeItem(index: number): void {}
  total(): number {
    return 2;
  }
  totalWithDiscount(): number {
    return 1;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessageMock implements MessageProtocol {
  sendMessage(msg: string): void {}
}

class RepositoryMock implements RepositoryProtocol {
  saveOrder(order: OrderProtocol): void {}
}

class CustomerMock implements CustomerProtocol {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messageMock = new MessageMock();
  const repositoryMock = new RepositoryMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppingCartMock,
    messageMock,
    repositoryMock,
    customerMock,
  );

  return { sut, shoppingCartMock, messageMock, repositoryMock, customerMock };
};

describe('Order', () => {
  it('Should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);

    sut.chekout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('Should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);

    sut.chekout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('Should send an email to customer', () => {
    const { sut, messageMock } = createSut();
    const messageMockSpy = jest.spyOn(messageMock, 'sendMessage');

    sut.chekout();
    expect(messageMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should save order', () => {
    const { sut, repositoryMock } = createSut();
    const repositoryMockSpy = jest.spyOn(repositoryMock, 'saveOrder');

    sut.chekout();
    expect(repositoryMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should save order', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');

    sut.chekout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
