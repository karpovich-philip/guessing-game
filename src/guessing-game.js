class GuessingGame {
  constructor() {

    this.state = {
      result: null,
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
    var result = Math.ceil((this.state.array[1] + this.state.array[this.state.array.length - 1]) / 2);

    this.state.result = result
    return result;
  }

  lower() {
    this.state.array.splice(Math.ceil(this.state.array.length / 2), this.state.array.length - 1);
  }

  greater() {
    this.state.array.splice(0, Math.ceil(this.state.array.length / 2));
  }
}

module.exports = GuessingGame;