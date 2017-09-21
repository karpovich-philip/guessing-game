class GuessingGame {
  constructor() {

    this.state = {
      array: []
    }
  }

  setRange(min, max) {
    for (var i = min; i <= max; i++) {
      var ar = this.state.array;
      ar.push(i);
    }
  }

  guess() {
    this.state.array
  }

  lower() {

  }

  greater() {

  }
}

module.exports = GuessingGame;
