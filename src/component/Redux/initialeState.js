const initialeState = {
  Data: [
    {
      name: "xyz",
      age: 20,
      Add: "ABC",
    },
    {
      name: "xyz",
      age: 20,
      Add: "ABC",
    },
    {
      name: "xyz",
      age: 20,
      Add: "ABC",
    },
  ],
};

export const initialeState = (state = initialeState, action) => {
  switch (action.type) {
    case "ADD_NEW_DATA":
      return { ...state, groups: [action.groups, ...state.groups] };
    default:
      return state;
  }
};
