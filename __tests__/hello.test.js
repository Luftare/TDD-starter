import { hello } from '../src/hello';

describe('hello', () => {
  it('should greet with given name', () => {
    const greeting = hello('Someone');

    expect(greeting).toBe('Hello, Someone.');
  });
});
