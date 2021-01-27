import { GalleryState, GalleryAction, ADD_IMAGE, GET_IMAGES, DELETE_IMAGE } from '../Types/galleryTypes';

const initialState: GalleryState = {
  images: [],
  imagesLoaded: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GalleryAction) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [action.payload, ...state.images]
      }
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        imagesLoaded: true
      }
    case DELETE_IMAGE:
      return {
        ...state,
        images: [...state.images].filter(image => image.id !== action.payload.id)
      }
    default:
      return state;
  }
}