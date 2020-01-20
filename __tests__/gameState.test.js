const GameState = require('../lib/utils/gameState');

describe('GameState methods', () => {
  it('should solve hands when given multiple hands and some board cards', () => {
    let testGameState = new GameState();
    testGameState.users = { socketIdOne: { username: 'ben' }, socketIdTwo: { username: 'jeff' }, socketIdThree: { username: 'doug' } };

    testGameState.hands = { socketIdTwo: { cardOne: { code: '4s' }, cardTwo: { code: '5s' } }, socketIdThree: { cardOne: { code: '6s' }, cardTwo: { code: '6h' } }, socketIdOne: { cardOne: { code: '2s' }, cardTwo: { code: '3s' } } };

    testGameState.board = { cardThree: { code: 'Th' }, cardFour: { code: '3h' }, cardFive: { code: 'Kh' }, cardSix: { code: '5h' }, cardSeven: { code: '6c' } };

    const winningHandString = testGameState.solveHands();
    expect(winningHandString).toEqual({ winningHandDescription: 'Flush, Kh High', winningSockets: ['socketIdThree'], winningUserNames: ['doug'] });
  });

  it('should solve for two winning hands when given multiple hands and some board cards', () => {
    let testGameState = new GameState();
    testGameState.users = { socketIdOne: { username: 'ben' }, socketIdTwo: { username: 'jeff' }, socketIdThree: { username: 'doug' } };

    testGameState.hands = { socketIdTwo: { cardOne: { code: '4s' }, cardTwo: { code: '5s' } }, socketIdThree: { cardOne: { code: '6s' }, cardTwo: { code: '6c' } }, socketIdOne: { cardOne: { code: '2s' }, cardTwo: { code: '3s' } } };

    testGameState.board = { cardThree: { code: 'Th' }, cardFour: { code: '9h' }, cardFive: { code: 'Kh' }, cardSix: { code: '5h' }, cardSeven: { code: '4h' } };

    const winningHandString = testGameState.solveHands();
    expect(winningHandString).toEqual({ winningHandDescription: 'Flush, Kh High', winningSockets: ['socketIdTwo', 'socketIdThree', 'socketIdOne'], winningUserNames: ['jeff', 'doug', 'ben'] });
  });
});
