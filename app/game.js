import Player from './player.js'
import Dice from './dice.js'
import Results from './results.js'

import { forEach, times } from 'ramda'

class Game {
  constructor() {
    const DEFAULT_NUM_OF_PLAYERS = 4
    const STARTING_ROUND = 1

    this.winners = []
    this.players = times(this.createPlayer, DEFAULT_NUM_OF_PLAYERS)
    this.round = STARTING_ROUND
  }

  run() {
    let answer = document.getElementById('answer')

    while (this.winners.length === 0) {

      if (answer) {
        answer.innerHTML += `<p> ************************************************** </p>`
        answer.innerHTML += `<u>ROLLING NOW FOR ROUND ${this.round}</u>`
      }

      for(let player of this.players) {

        Dice.performRolls(player)
        Results.fetch(player)

        if (player.dice === 0) {
          this.winners.push(player)
        }
      }
      this.round++
    }

    if (answer) {
      answer.innerHTML += `<p> Game Over!</p>`
      answer.innerHTML += `<p> The winners are: </p>`
      for(let winner of this.winners) {
        answer.innerHTML += `<p> - ${winner.name}`
      }
    }
  }

  createPlayer() {
    let player = new Player
    return player
  }
}

export default Game
