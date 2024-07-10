const map = <T, U>(array: T[], func: (item: T) => U) => {
  // check if the array ia empty
  if (array.length === 0) {
    return array;
  }

  let result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }

  //return new array
  return result;
};

let numbers = [5, 6, 7, 8, 9];

const converted = map(numbers, (num) => numbers.toString());
