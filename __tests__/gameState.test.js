const GameState = require('../lib/utils/gameState');

describe('GameState methods', () => {
  it('should solve hands when given multiple hands and some board cards', () => {
    let testGameState = new GameState();
    testGameState.hands = { }


    let hand = Hand.solve(['Kh', 'Tc', '5d', 'As', '3c', '3s', '2h']);
    expect(hand.descr).toEqual('Pair, 3\'s');
  });
});
