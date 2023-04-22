let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);

console.log(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") obj[key] = stringifyNumbers(obj[key]);
    else if (typeof obj[key] === "number") obj[key] = String(obj[key]);
  }

  return obj;
}
