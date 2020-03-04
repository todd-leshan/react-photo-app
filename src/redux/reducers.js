import { ADD_IMAGE } from "./action-types";

const initialState = {
  imagesData: ""
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const newState = { ...state };
    newState.imagesData = [...state.imagesData];
    newState.imagesData.unshift(action.payload.newImage);
    return newState;
  }

  return state;
};

export default rootReducer;
