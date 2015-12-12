import { reject } from 'ramda'

class Results {
  static fetch(player) {
    let answer = document.getElementById('answer')

    if (answer) {
      answer.innerHTML += `<p> ${player.name} </p>`
      answer.innerHTML += `<p> ${player.name} rolled ${player.rolls}`
    }
    Results.updateRolls(player)

    if (answer) {
      answer.innerHTML += `<p> New results: ${player.rolls}`
      answer.innerHTML += `<p> ${player.name} has ${player.dice} dice remaining`
      answer.innerHTML += `<p>---------------------------------------</p>`
    }
  }

  static updateRolls(player) {
    player.rolls = reject(Results.removeSix, player.rolls)
    player.dice = player.rolls.length
  }

  static removeSix(roll) {
    return roll === 6
  }
}

export default Results
