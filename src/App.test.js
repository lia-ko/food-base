import {convertPrice} from './components/home/ResultLine';

test('number of $ in price, if 2 expect $$', () => {
  expect(convertPrice(2)).toBe('$$');
});

