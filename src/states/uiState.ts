import { createStore, useStore } from "zustand";
import { useShallow } from "zustand/shallow";
import { LayoutObject } from "../types/utilities";
import { useContext } from "react";
import { RootStoreContext } from "./providers/storeProvider";
import { uiActions, UiStoreActions } from "./actions/uiActions";

export type UIStateType = {
  theme: 'light' | 'dark';
  menuOpen: boolean;
  loginOpen: boolean;
  layouts: LayoutObject;
};

export type RootUIState = UiStoreActions & UIStateType;

export const initialUiState: UIStateType = {
  theme: 'light',
  menuOpen: false,
  loginOpen: false,
  layouts: {},
};

export const createUiState = (initialState: UIStateType = initialUiState) => {
  return createStore<RootUIState>()((set, get) => ({
    ...initialState,
    ...uiActions(set, get),
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
