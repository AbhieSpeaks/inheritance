function Answer(value) {
  this._val = value;
}

Answer.prototype.get = function fn0() {
  return this._val;
}

var lifeAnswer = new Answer(32);
console.log(lifeAnswer.get());

var dessertAnswer = new Answer(21);
console.log(dessertAnswer.get());

function FirmAnswer(value) {
  Answer.call(this, value);
}

FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
  return Answer.prototype.get.call(this) + '!!';
};

var luckyAnswer = new FirmAnswer(3);
console.log(luckyAnswer.get());

var magicAnswer = new FirmAnswer(7);
console.log(magicAnswer.get());
