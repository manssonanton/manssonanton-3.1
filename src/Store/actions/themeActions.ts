import { CHANGE_THEME, ThemeActions, TOGGLE_CURSOR } from '../Types/themeTypes';
import { RootState } from '..'
import { ThunkAction } from 'redux-thunk';

// change theme
export const changeTheme = (theme: string): ThunkAction<void, RootState, null, ThemeActions> => {
    return dispatch => {
        localStorage.setItem("theme", theme);
        dispatch({
            type: CHANGE_THEME,
            payload: theme
        });
    }
}

export const toggleCursor = (cursor: string): ThunkAction<void, RootState, null, ThemeActions> => {
    return dispatch => {
        dispatch({
            type: TOGGLE_CURSOR,
            payload: cursor
        });
    }
}

// get theme
// export const getTheme = (): ThunkAction<void, RootState, null, ThemeActions> => {
//     return dispatch => {
//         const theme : ThemeState = {theme: "light"};
//         dispatch({
//             type: GET_THEME,
//             payload: theme
//         });
//     }
// }