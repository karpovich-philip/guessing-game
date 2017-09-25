class GuessingGame {
  constructor() {

    this.state = {
      result: null,
      array: []
    }
  }

  setRange(min, max) {
    for (let i = min; i <= max; i++) {
      let ar = this.state.array;
      ar.push(i);
    }
  }

  guess() {
    let arr = this.state.array;
    let result = Math.ceil((arr[1] + arr[arr.length-1])/2);
    return this.state.result = result;
  }

  lower() {
    let arr = this.state.array;
    arr.splice(Math.ceil(arr.length/2), arr.length-1);
  }

  greater() {
    let arr = this.state.array;
    arr.splice(0, Math.ceil(arr.length/2));
  }
}

module.exports = GuessingGame;