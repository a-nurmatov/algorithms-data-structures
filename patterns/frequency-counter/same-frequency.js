function sameFrequency(first, second) {
  if (`${first}`.length !== `${second}`.length) return false;
  let lookUp = {};

  while (first > 0) {
    let digit = first % 10;
    lookUp[digit] = ++lookUp[digit] || 1;
    first = Math.floor(first / 10);
  }

  while (second > 0) {
    let digit = second % 10;
    if (lookUp[digit]) lookUp[digit] -= 1;
    else return false;
    second = Math.floor(second / 10);
  }
  return true;
}
