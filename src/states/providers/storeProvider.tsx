'use client';

import { createContext, ReactNode, useRef } from "react";
import { createShopState } from "../shopState";
import { createUiState } from "../uiState";

export type RootStoreApi = {
  shop: ReturnType<typeof createShopState>;
  ui: ReturnType<typeof createUiState>;
};

export interface RootStoreProviderProps {
  children: ReactNode;
};

export const RootStoreContext = createContext<RootStoreApi | undefined>(undefined);

export const RootStoreProvider = ({ children }: RootStoreProviderProps) => {
  const storeRef = useRef<RootStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = {
      shop: createShopState(),
      ui: createUiState(),
    };
  }

  return (
    <RootStoreContext.Provider value={storeRef.current}>
      {children}
    </RootStoreContext.Provider>
  );
};
