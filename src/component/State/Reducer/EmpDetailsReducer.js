const initialState = {
  empData: [
    {
      name: "Salman",
      img: "logo192.png",
      desc: "HE is Bakend Trainer",
    },
    {
      name: "Amer sohel",
      img: "logo192.png",
      desc: "HE is UI Trainer",
    },
    {
      name: "Amer sohel",
      img: "logo192.png",
      desc: "HE is UI Trainer",
    },
    {
      name: "Amer sohel",
      img: "logo192.png",
      desc: "HE is UI Trainer",
    },
  ],
};

export const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMP":
      return { ...state, empData: [action.empData, ...state.empData] };
    default:
      return state;
  }
};
