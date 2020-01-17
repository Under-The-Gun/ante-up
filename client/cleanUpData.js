module.exports = (data) => {
  return data.holdCards.map(card => {
    let asciiCard = '';
    let spade = ♠;
    let heart = ♥;
    let club = ♣;
    let diamond = ♦;

    asciiCard += card.value;
    
    switch (card.code[1]){
      case s:
        asciiCard += spade;
        break;
      case h:
        asciiCard += heart;
        break;
      case c:
        asciiCard += club;
        break;
      case d:
        asciiCard += diamond;
        break;
    }
    return asciiCard;
  });
};
