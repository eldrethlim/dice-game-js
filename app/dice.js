import { times } from 'ramda'

class Dice {

  static performRolls(player) {
    player.rolls = times(Dice.roll, player.dice)
  }

  static roll() {
    return Math.floor(Math.random() * 6) + 1
  }
}

export default Dice
