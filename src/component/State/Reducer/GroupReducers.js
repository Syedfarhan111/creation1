const initialeState = {
  groups: [
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

export const groupState = (state = initialeState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, groups: [action.groups, ...state.groups] };
    default:
      return state;
  }
};
