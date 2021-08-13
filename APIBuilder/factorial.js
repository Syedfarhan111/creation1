const factorial = (num) => {
  for (let i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
};
console.log(factorial(10));

//_______________________________________second method_______________________________________________________

const factorial2 = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial2(num - 1);
  }
};
console.log(factorial2(10));

//----------------------------------------third method------------------------------------------------------

const factorial3 = (num) => (num < 2 ? 1 : num * factorial3(num - 1));

console.log(factorial3(10));
