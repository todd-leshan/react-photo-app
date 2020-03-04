import { ADD_IMAGE, VIEW_GRID, VIEW_ADAPTIVE } from "./action-types";

export const addImage = ({ newImage }) => {
  return {
    type: ADD_IMAGE,
    payload: {
      newImage
    }
  };
};

export const switchToAdaptiveView = () => {
  return {
    type: VIEW_ADAPTIVE
  };
};

export const switchToGridView = () => {
  return {
    type: VIEW_GRID
  };
};
