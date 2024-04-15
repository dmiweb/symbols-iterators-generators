export default class TeamGenerator {
  constructor(...char) {
    this.characters = { ...char };
  }

  *[Symbol.iterator]() {
    for (const char of Object.values(this.characters)) {
      yield char;
    }
  }
}