const biosectionAlgo = (arrNum) => {
  const firstIndex = 0;
  const lastIndex = arrNum.length - 1;
  const mid = math.floor((firstIndex + lastIndex) / 2);

  if (arrNum[mid] === findNum) {
    return mid;
  }
};

console.log(biosectionAlgo([2, 4, 5, 7, 8, 11, 45, 77, 120, 134, 145], 120));
