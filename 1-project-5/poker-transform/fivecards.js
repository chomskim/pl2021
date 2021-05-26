const Card = require('./card')
const Comparable = require('./comparable')
const CardComparator = require('./card-comparator')
const selSort = require('./selSort')
const pokerTransform = require('./pokerTransform')

class FiveCards extends Comparable {
  constructor(cards) {
    super()
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    this.reorder()
    this.rankInfo = pokerTransform(
      this.fiveCards.map((ca) => (ca.rank === Card.ACE ? Card.KING + 1 : ca.rank))
    )
  }

  compareTo(right) {
    return this.fiveCards[0].compareTo(right.fiveCards[0])
  }

  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  reorder() {
    this.fiveCards = selSort(this.fiveCards, new CardComparator())
  }
}

module.exports = FiveCards
