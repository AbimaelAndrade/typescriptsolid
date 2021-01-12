import { Repository } from './repository';

afterEach(() => jest.clearAllMocks());

describe('Repository', () => {
  it('should return undefined', () => {
    const sut = new Repository();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Repository();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with message', () => {
    const sut = new Repository();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Your order was saved');
  });
});
