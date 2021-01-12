import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
  Discount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);

    expect(sut.calculate(50)).toBe(25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);

    expect(sut.calculate(50)).toBe(45);
  });
});
