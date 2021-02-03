import { CHANGE_THEME, ThemeActions, ThemeState, TOGGLE_CURSOR } from '../Types/themeTypes';


const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);

if(!persistedTheme){
  localStorage.setItem("theme", "light");
}

const initialState: ThemeState = {
  colorTheme: persistedTheme ? persistedTheme : "light",
  cursorTheme: ""
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ThemeActions) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        colorTheme: action.payload
      }
      case TOGGLE_CURSOR:
      return {
        ...state,
        cursorTheme: action.payload
      }
    default:
      return state;
  }
}