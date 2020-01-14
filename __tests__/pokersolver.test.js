const Hand = require('pokersolver').Hand;

describe('pokersolver methods', () => {
  it('should return a correct description', () => {
    let hand = Hand.solve(['Kh', 'Tc', '5d', 'As', '3c', '3s', '2h']);
    expect(hand.descr).toEqual('Pair, 3\'s');
  });

  it('should return best hand as Two Pair', () => {
    let hand = Hand.solve(['8d', '8s', '4s', '5c', 'Qd', '5d', 'Qh']);
    expect(hand.name).toEqual('Two Pair');
  });

  it('should detect the best hand string (#1)', () => {
    let hand = Hand.solve(['8d', '8s', '4s', '5c', 'Qd', '5d', 'Qh']);
    expect(hand.toString()).toEqual('Qd, Qh, 8d, 8s, 5c');
  });

  it('should detect the best hand string (#2)', () => {
    let hand = Hand.solve(['4s', '4h', 'Ah', 'Jc', 'Ts', '7s', '8d']);
    expect(hand.toString()).toEqual('4s, 4h, Ah, Jc, 10s');
  });

  it('should detect the winning hand from a list', () => {
    let h1 = Hand.solve(['2s', '3s', '4h', '5c', 'As', 'Ts', '8d']);
    let h2 = Hand.solve(['5s', 'Ts', '3h', 'Ac', '2s', 'Ts', '8d']);
    let h3 = Hand.solve(['5s', '5h', '3s', '3c', '2s', 'Ts', '3d']);
    let winners = Hand.winners([h1, h2, h3]);
    expect(winners.length).toEqual(1);
    expect(winners[0]).toEqual(h3);
  });

  it('should detect the winning hand from a list', () => {
    var h1 = Hand.solve(['2s', '3s', '4h', '5c', 'As', 'Ts', '8d']);
    var h2 = Hand.solve(['2h', '3h', '4d', '5d', 'Ah', 'Tc', '8c']);
    var h3 = Hand.solve(['5s', 'Ts', '3h', 'Ac', '2s', 'Ts', '8d']);
    var winners = Hand.winners([h1, h2, h3]);
    expect(winners.length).toEqual(2);
    expect(winners.indexOf(h1) >= 0).toEqual(true);
    expect(winners.indexOf(h2) >= 0).toEqual(true);
  });
});
