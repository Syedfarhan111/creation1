const greatestStrInString = (str) => {
  const arrStr = str.split(" ");
  let maxStr = arrStr[0].length;
  let strData = arrStr[0];

  arrStr.forEach((element) => {
    if (maxStr < element.length) {
      maxStr = element.length;
      strData = element;
    }
  });
  return strData;
};

console.log(
  greatestStrInString(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non tenetur quos, officiis sed dicta illo distinctio. Vitae, consectetur? Optio unde nobis ex ad voluptatibus corrupti blanditiis reiciendis dolore laboriosam"
  )
);

// just return array of lenth

// const greatestStrInArr = (arrStr) => {
//     let maxStr = arrStr[0].length;

//     arrStr.forEach((element) => {
//       if (maxStr < element.length) maxStr = element.length;
//     });
//     return maxStr;
//   };

//   console.log(
//     greatestStrInArr(["cat", "bat", "bott", "i", "react", "java", "am"])
//   );
