function capitalizeFirst(arr) {
  if (!arr.length) return [];
  // add whatever parameters you deem necessary - good luck!
  const word = arr[0];
  const firstLetter = word[0].toUpperCase();
  const restLetters = word.slice(1);
  return [firstLetter + restLetters].concat(capitalizeFirst(arr.slice(1)));
}
