import { Message } from './message';

const createSut = () => {
  return new Message();
};

afterEach(() => jest.clearAllMocks());

describe('Repository', () => {
  it('should return undefined', () => {
    const sut = createSut();

    expect(sut.sendMessage('message')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('message');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with message', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('my test');

    expect(consoleSpy).toHaveBeenCalledWith('Send message my test');
  });
});
