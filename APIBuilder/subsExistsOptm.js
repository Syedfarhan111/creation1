const FindString = (str) => {
  return str.split(" ").filter((item) => item === "Lorem").length;
};

const strData =
  "Lorem, ipsum dolor sit amet consectetur Lorem  Lorem adipisicing elit. Quibusdam voluptates recusandae accusamus incidunt quod modi quos optio, pariatur hic quae mollitia laboriosam ipsam maiores deleniti quisquam natus Lorem itaque obcaecati dolor.";

console.log(FindString(strData));
