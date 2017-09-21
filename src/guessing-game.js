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
    var result = Math.ceil((this.state.array.length - 1) / 2);
    this.state.result = result
    return result;
  }

  lower(result) {
    return this.state.array.splice(result, this.state.array.length - 1);
  }

  greater() {
    return this.state.array.splice(0, result);
  }
}

module.exports = GuessingGame;
