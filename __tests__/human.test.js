import Human from './../src/js/human.js';
describe('Human', () => {

  test('should correctly create a human object with a name and an earth age', () => {
    const human = new Human("Dan Dimmerdome", 27);
    expect(human.name).toEqual("Dan Dimmerdome");

  });
});