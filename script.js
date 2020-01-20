/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

const game = {
  deck: [],
  players: {
    'Player 1': [],
    'Player 2': [],
    'Player 3': [],
    'Player 4': []
  }
}

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

//make our deck of cards
//loop over the suis
//loop over the ranks
//push object to array
//object contains a suit proprety and a rank property
//{suit:'harts', rank:2}
// shufle the cards
//deal the cards to the players
//slice method
//deck.slice(0,13)
//loop method
//for (const player in game.players){
 // for (let i=0;i<13; i++){
   // game.players[players]=deck.shift()
 // }
//}
//alternet players
//for(let i = 0; i < deck.lenght;i++){
  //game.players['Players 1'].push(game.deck[i])
  //game.players['Players 2'].push(game.deck[++i])
//}
//playess show their hands
// create players button
//create event listener to the parent
//use button textContent to get player index
//

const cards =[]
const hand = document.getElementById('hand')
for ( const suit of suits ){

for (const rank of ranks){ 
  cards.push({ suit,rank
  })
}
}

game.deck =shuffle(cards)

//alternet players

for(let i = 0; i < game.deck.length;i++){
  game.players['Player 1'].push(game.deck[i])
  game.players['Player 2'].push(game.deck[++i])
  game.players['Player 3'].push(game.deck[++i])
  game.players['Player 4'].push(game.deck[++i])
}

// create players button

const buttons = []
for (const player in game.players){
  buttons.push(`<button class="button">${player}</button>`)
}
const $controls = document.getElementById('controls')
$controls.innerHTML = buttons.join('')

//create event listener to the parent
$controls.addEventListener('click', function(e){
  if (e.target.classList.contains('button')){
    hand.innerHTML=game.players[e.target.textContent].map(
      function(card){
        return `<div class="card">
        <div class="number ${card.suit}">${card.rank}</div>
        <div class="suit"><img src="images/${card.suit}.png"></div>
        <div class="number ${card.suit}">${card.rank}</div>
      </div>`}).join('')
    
      }
  }
)