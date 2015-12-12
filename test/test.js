import { expect } from 'chai'

import Game from '../app/game.js'
import Player from '../app/player.js'
import Dice from '../app/dice.js'
import Result from '../app/results.js'

describe("Player", () => {
  let player = new Player("Bob")

  it("expects name Bob", () => {
    expect(player.name).to.equal("Bob")
  })

  it("expects 6 dice", () => {
    expect(player.dice).to.equal(6)
  })
})

describe("Dice", () => {

  it("returns array of 6 values", () => {
    let player = new Player
    Dice.performRolls(player)
    expect(player.rolls.length).to.equal(player.dice)
  })
})

describe("Results", () => {

  it("correctly filters 6 from rolls", () => {
    let player = new Player
    player.rolls = [1,2,3,4,5,6]
    Result.fetch(player)
    expect(player.rolls).to.eql([1,2,3,4,5])
    expect(player.dice).to.equal(5)
  })
})

describe("Game", () => {

  it("starts the game with 4 players", () => {
    let game = new Game
    expect(game.players.length).to.equal(4)
  })

  it("should end when winners have 0 die", () => {
    let game = new Game
    game.run()

    for(let winner of game.winners) {
      expect(winner.dice).to.equal(0)
    }
  })
})
