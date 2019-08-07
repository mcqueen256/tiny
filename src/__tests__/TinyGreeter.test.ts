import { TinyGreeter } from '../index';

test('My Tiny Greeter', () => {
  expect(TinyGreeter('Nic')).toBe('Hello Nic from the tiny package!');
});
