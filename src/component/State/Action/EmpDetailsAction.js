export const addEmp = (name, img, desc) => ({
  type: "ADD_EMP",
  empData: {
    name,
    desc,
    img,
  },
});
