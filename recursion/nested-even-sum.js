function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") sum += nestedEvenSum(obj[key]);
    else if (isEven(obj[key])) sum += obj[key];
  }

  return sum;
}

function isEven(val) {
  if (isNaN(val)) return false;

  if (val % 2 === 0) return true;

  return false;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
