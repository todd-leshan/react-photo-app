import { ADD_IMAGE, VIEW_GRID, VIEW_ADAPTIVE } from "./action-types";

const layoutViews = {
  DEFAULT: "grid-view",
  GRID: "grid-view",
  ADAPTIVE: "adaptive-view"
};

const initialState = {
  imagesData: [
    "https://d3e1m60ptf1oym.cloudfront.net/6c66821f-a2da-4a6c-abf7-4ac31148a971/170701-A190_xlarge.jpg",
    "https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg",
    "https://lp-cms-production.imgix.net/2019-06/65830387.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/japan/assets/japan-fuji-mountain-himeji-castle-full-cherry-blossom-h.jpg?$750x667$"
  ],
  layoutView: layoutViews.DEFAULT
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const newState = { ...state };
    newState.imagesData = [action.payload.newImage, ...state.imagesData];
    return newState;
  }

  if (action.type === VIEW_GRID) {
    const newState = { ...state };
    newState.layoutView = layoutViews.GRID;
    return newState;
  }

  if (action.type === VIEW_ADAPTIVE) {
    const newState = { ...state };
    newState.layoutView = layoutViews.ADAPTIVE;
    return newState;
  }

  return state;
};

export default rootReducer;
