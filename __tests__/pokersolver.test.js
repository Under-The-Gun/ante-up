var pokersolver = require('../pokersolver');
var Hand = require('../pokersolver').Hand;

describe('A basic hand', function() {
  it('should return a correct description', function() {
    var hand = Hand.solve(['Kh', 'Tc', '5d', 'As', '3c', '3s', '2h']);
    return hand.descr.toEqual('Pair, 3\'s');
  });
});

describe('Building hands from 7 cards', function() {
  it('should return best hand as Two Pair', function() {
    var hand = Hand.solve(['8d', '8s', '4s', '5c', 'Qd', '5d', 'Qh']);
    return hand.name.toEqual('Two Pair');
  });
  it('should detect the best hand string (#1)', function() {
    var hand = Hand.solve(['8d', '8s', '4s', '5c', 'Qd', '5d', 'Qh']);
    return hand.toString().toEqual('Qd, Qh, 8d, 8s, 5c');
  });
  return it('should detect the best hand string (#2)', function() {
    var hand = Hand.solve(['4s', '4h', 'Ah', 'Jc', 'Ts', '7s', '8d']);
    return hand.toString().toEqual('4s, 4h, Ah, Jc, 10s');
  });
});

describe('Deterining winning hands', function() {
  it('should detect the winning hand from a list', function() {
    var h1 = Hand.solve(['2s', '3s', '4h', '5c', 'As', 'Ts', '8d']);
    var h2 = Hand.solve(['5s', 'Ts', '3h', 'Ac', '2s', 'Ts', '8d']);
    var h3 = Hand.solve(['5s', '5h', '3s', '3c', '2s', 'Ts', '3d']);
    var winners = Hand.winners([h1, h2, h3]);
    winners.length.toEqual(1);
    return winners[0].toEqual(h3);
  });
  return it('should detect the winning hands from a list', function() {
    var h1 = Hand.solve(['2s', '3s', '4h', '5c', 'As', 'Ts', '8d']);
    var h2 = Hand.solve(['2h', '3h', '4d', '5d', 'Ah', 'Tc', '8c']);
    var h3 = Hand.solve(['5s', 'Ts', '3h', 'Ac', '2s', 'Ts', '8d']);
    var winners = Hand.winners([h1, h2, h3]);
    winners.length.toEqual(2);
    (winners.indexOf(h1) >= 0).toEqual(true);
    return (winners.indexOf(h2) >= 0).toEqual(true);
  });
});
