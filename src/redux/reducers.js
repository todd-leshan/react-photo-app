import { ADD_IMAGE } from "./action-types";

const initialState = {
  imagesData: [
    "https://d3e1m60ptf1oym.cloudfront.net/6c66821f-a2da-4a6c-abf7-4ac31148a971/170701-A190_xlarge.jpg",
    "https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg",
    "https://lp-cms-production.imgix.net/2019-06/65830387.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/japan/assets/japan-fuji-mountain-himeji-castle-full-cherry-blossom-h.jpg?$750x667$"
  ]
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
