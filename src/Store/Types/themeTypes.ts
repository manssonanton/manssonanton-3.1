export const CHANGE_THEME = 'CHANGE_THEME';
export const GET_THEME = 'GET_THEME';
export const TOGGLE_CURSOR = 'TOGGLE_CURSOR';

export interface ThemeState {
  colorTheme: string;
  cursorTheme: string;
}

// Actions
interface toggleColorThemeAction {
  type: typeof CHANGE_THEME;
  payload: string;
}
interface toggleCursorThemeAction {
  type: typeof TOGGLE_CURSOR;
  payload: string;
}

export type ThemeActions = toggleColorThemeAction | toggleCursorThemeAction;