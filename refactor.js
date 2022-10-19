const returnRandomNumber = () => Math.round(Math.random() * 100);
const returnTextResponse = (response) => `Seu número é ${response}!`;

function sumToRandomNumber(num) {
  return returnTextResponse(returnRandomNumber() + num);
}

function subtractRandomNumber(num) {
  return returnTextResponse(returnRandomNumber() - num);
}

function multiplyToRandomNumber(num) {
  return returnTextResponse(returnRandomNumber() * num);
}

function divideRandomNumber(num) {
  return returnTextResponse(returnRandomNumber() / num);
}
