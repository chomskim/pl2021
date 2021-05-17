const CardComparator = require('./card-comparator')
const FiveCards = require('./fivecards')
const selSort = require('./selSort')
const FiveCardsComparator = require('./fivecards-comparator')

let [A, K, Q, J] = [14, 13, 12, 11]
let cardList = [
  [A, 2, 3, 4, 5],
  [A, 2, 3, 4, 6],
  [A, 2, 3, 5, 6],
  [A, 5, 7, Q, K],
  [A, A, 2, 3, 4],
  [6, 8, J, K, K],
  [7, 8, J, K, K],
  [A, A, 2, 2, 3],
  [Q, Q, J, K, K],
  [9, Q, Q, K, K],
  [A, A, A, 2, 3],
  [Q, J, K, K, K],
  [8, Q, K, K, K],
  [A, A, A, 2, 2],
  [Q, Q, K, K, K],
  [J, J, K, K, K],
  [A, A, A, A, 2],
  [Q, K, K, K, K],
  [A, K, K, K, K],
]

cardList = cardList.map((fc) => selSort(fc, new CardComparator()))

function getPairs(list) {
  if (list.length < 2) return []
  else {
    if (list[0] == list[1]) return [list[0]].concat(getPairs(list.slice(2, list.length)))
    else return getPairs(list.slice(1, list.length))
  }
}

cardList = cardList.map((fc) => selSort(fc, new CardComparator()))
let pairList = cardList.map(getPairs)
console.log(`pairList=${JSON.stringify(pairList)}`)
