export const GET_IMAGES = 'GET_IMAGES';
export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export interface GalleryImage {
  id?: string;
  imageUrl: string;
  filePath: string;
  fileName: string;
  createdAt: number;
  uploaderName: string;
  uploaderId: string;
}

export interface GalleryState {
  images: GalleryImage[];
  imagesLoaded: boolean;
}

// Actions
interface AddImageAction {
  type: typeof ADD_IMAGE;
  payload: GalleryImage;
}

interface GetImagesAction {
  type: typeof GET_IMAGES;
  payload: GalleryImage[];
}

interface DeleteImageAction {
  type: typeof DELETE_IMAGE;
  payload: GalleryImage;
}

export type GalleryAction = AddImageAction | GetImagesAction | DeleteImageAction;