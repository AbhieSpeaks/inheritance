var AnswerPrototype = {
  constructor: function fn0(value) {
    this._val = value
  },
  get: function fn1() {
    return this._val;
  }
}

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(20);
console.log(lifeAnswer.get());

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(40);
console.log(dessertAnswer.get());

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
  return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(60);
console.log(luckyAnswer.get());

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(80);
console.log(magicAnswer.get());
