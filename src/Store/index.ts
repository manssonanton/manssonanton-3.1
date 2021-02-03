import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import logger from 'redux-logger';
import galleryReducer from './reducers/galleryReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    gallery: galleryReducer,
    themes: themeReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;