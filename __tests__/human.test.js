import Human from './../src/js/human.js';
describe('Human', () => {
  let human;

  beforeEach(() => {
    human = new Human("Dan Dimmerdome", 27);
  });

  test('should correctly create a human object with a name and an earth age', () => {
    const human = new Human("Dan Dimmerdome", 27);
    expect(human.name).toEqual("Dan Dimmerdome");
    expect(human.currentAge).toEqual(27);
  });

  test('should correctly set the value of human.mercuryAge based on human.currentAge', () => {
    human.mercury();
    expect(human.mercuryAge).toEqual(112);
  });

});