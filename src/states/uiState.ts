import { createStore, useStore } from "zustand";
import { useShallow } from "zustand/shallow";
import { LayoutObject } from "../types/utilities";
import { useContext } from "react";
import { RootStoreContext } from "./providers/storeProvider";

export type RootUIState = {
  theme: 'light' | 'dark';
  menuOpen: boolean;
  layouts: LayoutObject;
};

export const initialUiState: RootUIState = {
  theme: 'light',
  menuOpen: false,
  layouts: {},
};

export const createUiState = (initialState: RootUIState = initialUiState) => {
  return createStore<RootUIState>()((set, get) => ({
    ...initialState,
    setTheme: (theme: 'light' | 'dark') => set((state) => ({ ...state, theme })),
    setMenuOpen: (open: boolean) => set((state) => ({ ...state, menuOpen: open })),
  }));
};

export const useUiState = <T,>(selector: (store: RootUIState) => T) => {
  const store = useContext(RootStoreContext);

  if (!store) {
    throw new Error("useShopStore must be used within a ShopStoreProvider");
  }

  return useStore(store.ui, selector);
};

export function useUiShallow<U>(selector: (state: RootUIState) => U): U {
  return useUiState(useShallow(selector));
};
