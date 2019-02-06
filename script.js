// 
// my blackjack game
//


//card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values= ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
            'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three',
            'Two'];
            
//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button')

// Game variable
let gameStarted = false.
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

  hitButton.style.display = 'none';
  stayButton.style.display = 'none';
  showStatus();

newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [ getNextCard(), getNextCard()];
  dealerCards = [ getNextCard(), getNextCard()];
  
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
  
});

function createDeck(){
  let deck = [];
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
    for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
      let card = {
        suit:suits[suitIdx],
        value:values[valueIdx]
      }
      deck.push(card);
     }
  }
  return deck;
}

function shuffleDeck(deck){
  for(i=0; i<deck.length; i++){
    let swapIdx = Math.trunc(Math.random()* deck.length)
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getNextCard(){
   return deck.shift();
}


// let deck = createDeck();
  
function getCardString(card){
  return card.value+ ' of  '+card.suit;
}

function showStatus(){
  if(!gameStarted){
    textArea.innerText = 'Welcome to blackjack';
    return;
  }
  for ( var i=0; i<deck.length; i++){
  textArea.innerText += '\n' +getCardString(deck[i]);
  }
}

// let playerCards = [
//     getNextCard(), getNextCard()
  
//   ];

    
    // console.log("welcome to Blackjack");
    // console.log(" " + "you are dealt:");
    // console.log(" " +getCardString(playerCards[0]));
    // console.log(" " +getCardString(playerCards[1]));
    
