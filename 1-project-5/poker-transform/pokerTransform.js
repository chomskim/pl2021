const CardComparator = require('./card-comparator')
const FiveCards = require('./fivecards')
const selSort = require('./selSort')
const FiveCardsComparator = require('./fivecards-comparator')
const Card = require('../../1-project-4/sort-with-comparator/card')

let [A, K, Q, J] = [1, 13, 12, 11]
let cardList = [
  [
    [1, A],
    [2, 2],
    [3, 3],
    [4, 4],
    [1, 6],
  ],
  [
    [1, A],
    [2, 2],
    [3, 3],
    [4, 5],
    [1, 6],
  ],
  [
    [1, A],
    [2, 5],
    [3, 7],
    [4, Q],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, 2],
    [4, 3],
    [1, 4],
  ],
  [
    [1, 6],
    [2, 8],
    [3, J],
    [4, K],
    [1, K],
  ],
  [
    [1, 7],
    [2, 8],
    [3, J],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, 2],
    [4, 2],
    [1, 3],
  ],
  [
    [1, Q],
    [2, Q],
    [3, J],
    [4, K],
    [1, K],
  ],
  [
    [1, 9],
    [1, Q],
    [2, Q],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, A],
    [4, 2],
    [1, 3],
  ],
  [
    [1, Q],
    [2, J],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, 8],
    [2, Q],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, A],
    [4, 2],
    [1, 2],
  ],
  [
    [1, Q],
    [2, Q],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, J],
    [2, J],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, A],
    [3, A],
    [4, A],
    [1, 2],
  ],
  [
    [1, Q],
    [2, K],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, K],
    [3, K],
    [4, K],
    [1, K],
  ],
  [
    [1, A],
    [2, 2],
    [3, 3],
    [4, 4],
    [1, 5],
  ],
  [
    [1, A],
    [1, 2],
    [1, 3],
    [1, 5],
    [1, 6],
  ],
  [
    [1, A],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ],
  [
    [3, 10],
    [3, J],
    [3, Q],
    [3, K],
    [3, A],
  ],
]

cardList = cardList.map((list5) => list5.map((ca) => new Card(ca[0], ca[1])))
console.log(`cardList=${JSON.stringify(cardList)}`)

cardList = cardList.map((card5) => new FiveCards(card5))
function printFiveCardsList(fcList) {
  fcList.forEach((fc, i) => {
    console.log(`${i + 1} ${fc}`)
  })
}
printFiveCardsList(cardList)

function getPairs(list) {
  if (list.length < 2) return []
  else {
    if (list[0] == list[1]) return [list[0]].concat(getPairs(list.slice(2, list.length)))
    else return getPairs(list.slice(1, list.length))
  }
}

let rankList = cardList.map((fc) =>
  fc.fiveCards.map((ca) => (ca.rank === Card.ACE ? Card.KING + 1 : ca.rank))
)
console.log(`rankList=${JSON.stringify(rankList)}`)
let pairList = rankList.map(getPairs)
console.log(`pairList=${JSON.stringify(pairList)}`)
