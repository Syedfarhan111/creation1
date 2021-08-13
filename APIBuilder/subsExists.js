const FindString = (str) => {
  const arrStr = str.split(" ");
  let cnt = 0;
  arrStr.forEach((element) => {
    if (element.toUpperCase() === "Lorem".toUpperCase()) {
      cnt = cnt + 1;
    }
  });
  return cnt;
};

const strData =
  "Lorem, ipsum dolor sit amet consectetur Lorem  Lorem adipisicing elit. Quibusdam voluptates recusandae accusamus incidunt quod modi quos optio, pariatur hic quae mollitia laboriosam ipsam maiores deleniti quisquam natus Lorem itaque obcaecati dolor.";

console.log(FindString(strData));
