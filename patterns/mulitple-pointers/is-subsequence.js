function isSubsequence(keyword, text) {
  // good luck. Add any arguments you deem necessary.
  let left = 0;
  for (let i = 0; i < text.length; i++) {
    if (keyword[left] === text[i]) left++;
    if (left === keyword.length) return true;
  }
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb");
