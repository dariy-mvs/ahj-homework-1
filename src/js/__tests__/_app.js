import demo from '../app';

test('demo', () => {
  const demoValue = demo('Value');
  expect(demoValue).toBe('Value');
});
