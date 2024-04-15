export default class Team {
  constructor(...char) {
    this.characters = { ...char };
  }

  [Symbol.iterator]() {
    let index = 0;
    const personages = Object.values(this.characters)
    return {
      next() {
        if (index >= personages.length) {
          return {
            value: undefined,
            done: true
          }
        }
        return {
          value: personages[index++],
          done: false
        }
      }
    }
  }
}