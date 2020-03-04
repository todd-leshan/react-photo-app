import { ADD_IMAGE } from "./action-types";

export const addImage = ({ image }) => {
  return {
    type: ADD_IMAGE,
    payload: {
      image
    }
  };
};
