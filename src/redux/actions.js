import { ADD_IMAGE } from "./action-types";

export const addImage = ({ newImage }) => {
  return {
    type: ADD_IMAGE,
    payload: {
      newImage
    }
  };
};
