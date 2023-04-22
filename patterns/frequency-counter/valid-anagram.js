function validAnagram(s1, s2) {
  // receives two strings

  // 1) check the length of strings is equal
  if (s1.length !== s2.length) return false;

  // 2) make object for saving letters and their counts
  const lookUp = {};

  // 3) count letters using for loop
  for (let char of s1) {
    lookUp[char] = ++lookUp[char] || 1;
  }
  console.log(lookUp);

  // 4) check letters are present in second string
  for (let char of s2) {
    if (!lookUp[char]) return false;
    else lookUp[char] -= 1;
  }

  // returns boolean
  return true;
}

console.log(validAnagram("first", "stirf"));
