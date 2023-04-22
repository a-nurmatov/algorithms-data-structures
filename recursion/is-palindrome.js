// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  let reversedString = "";

  function reverse(str) {
    if (!str.length) return "";

    reversedString = str[0] + reversedString;
    reverse(str.slice(1));
  }

  reverse(str);

  return str === reversedString;
}
