import { ADD_IMAGE } from "./action-types";

const initialState = {
  imagesData: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const newState = { ...state };
    return newState.imagesData.unshift(action.payload.image);
  }

  return state;
};

export default rootReducer;
