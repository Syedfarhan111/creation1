const greatestNumInArr = (arrNum) => {
  let maxNum = 0;
  arrNum.forEach((element) => {
    if (element > maxNum) {
      maxNum = element;
    }
  });
  return maxNum;
};

console.log(greatestNumInArr([7, 5, 8, 25, 75, 1, 8, 99, 3]));

// Finding minimum number__________________________________________________________________________

const smallestNumInArr = (arrNum) => {
  let maxNum = arrNum[0];
  arrNum.forEach((element) => {
    if (element < maxNum) {
      maxNum = element;
    }
  });
  return maxNum;
};

console.log(smallestNumInArr([7, 5, 8, 25, 75, 1, 8, 99, 3]));
