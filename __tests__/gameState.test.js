const GameState = require('../lib/utils/gameState');


describe('GameState methods', () => {
  it('should solve hands when given multiple hands and some board cards', () => {
    let testGameState = new GameState();
    testGameState.users = { socketIdOne: { username: 'ben' }, socketIdTwo: { username: 'jeff' }, socketIdThree: { username: 'doug' } };

    testGameState.hands = { socketIdTwo: { cardOne: '4s', cardTwo: '5s' }, socketIdThree: { cardOne: '6s', cardTwo: '6h' }, socketIdOne: { cardOne: '2s', cardTwo: '3s' } };

    testGameState.board = { cardThree: 'Th', cardFour: '3h', cardFive: 'Kh', cardSix: '5h', cardSeven: '6c' };

    const winningHandString = testGameState.solveHands();
    expect(winningHandString).toEqual({ winningHandDescription: 'Flush, Kh High', winningSockets: ['socketIdThree'], winningUserNames: ['doug'] });
  });

  it('should solve for two winning hands when given multiple hands and some board cards', () => {
    let testGameState = new GameState();
    testGameState.users = { socketIdOne: { username: 'ben' }, socketIdTwo: { username: 'jeff' }, socketIdThree: { username: 'doug' } };

    testGameState.hands = { socketIdTwo: { cardOne: '4s', cardTwo: '5s' }, socketIdThree: { cardOne: '6s', cardTwo: '6c' }, socketIdOne: { cardOne: '2s', cardTwo: '3s' } };

    testGameState.board = { cardThree: 'Th', cardFour: '9h', cardFive: 'Kh', cardSix: '5h', cardSeven: '4h' };

    const winningHandString = testGameState.solveHands();
    expect(winningHandString).toEqual({ winningHandDescription: 'Flush, Kh High', winningSockets: ['socketIdTwo', 'socketIdThree', 'socketIdOne'], winningUserNames: ['jeff', 'doug', 'ben'] });
  });
});
