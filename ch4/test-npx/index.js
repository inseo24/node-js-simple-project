function getRandomInt(min, max /* 주석도 포매팅 */) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(10, 20));
