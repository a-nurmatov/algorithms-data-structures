function reverse(str) {
  let newStr = "";

  if (!str.length) return "";

  return reverse(str.slice(1)) + str[0];
}
