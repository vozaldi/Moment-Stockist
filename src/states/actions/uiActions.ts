import { StoreActions } from "../../types/reducer";
import { RootUIState } from "../uiState";

export type UiStoreActions = {
  setTheme: (theme: 'light' | 'dark') => void;
  setMenuOpen: (open: boolean) => void;
  setLoginOpen: (open: boolean) => void;
};

export const uiActions: StoreActions<UiStoreActions, RootUIState> = (set, get): UiStoreActions => ({
  // Open State
  setTheme: (theme: 'light' | 'dark') => set((state) => ({ ...state, theme })),
  setMenuOpen: (open: boolean) => set((state) => ({ ...state, menuOpen: open })),
  setLoginOpen: (open: boolean) => set((state) => ({ ...state, loginOpen: open })),
});
