import findBy from '../search';

const arr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  { name: 'урон', type: 'adas', description: 'Страница описания элемента интерфейса' },
];

test('checking the decimal number', () => {
  const finder = findBy('description', 'Атака магическим заклинанием');
  const results = arr.filter(finder);

  expect(results).toStrictEqual([
    {
      name: 'заклинание',
      type: 'attack',
      description: 'Атака магическим заклинанием',
    },
  ]);
});

test('checking the decimal number', () => {
  const finder = findBy('health', '50');
  const results = arr.filter(finder);

  expect(results).toStrictEqual([]);
});
