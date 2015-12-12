import Faker from 'faker'

class Player {
  constructor(name = Faker.name.findName()) {
    const DEFAULT_DICE = 6

    this.name = name
    this.dice = DEFAULT_DICE
    this.rolls = []
  }
}

export default Player
