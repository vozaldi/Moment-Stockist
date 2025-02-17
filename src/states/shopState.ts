import { CartModel, ReservationModel } from "../types/models";
import { shopActions, ShopStoreActions } from "./actions";
import { createStore } from 'zustand/vanilla';
import { RootStoreContext } from "./providers/storeProvider";
import { useShallow } from "zustand/shallow";
import { useContext } from "react";
import { useStore } from "zustand";

export type ShopStateType = {
  // Toggleable Modals
  cartOpen: boolean;

  // Shopping
  cart: CartModel | null;
  carts: CartModel[];
  cartsUpdate: number;
  transaction: ReservationModel | null;
};

export type RootShopState = ShopStateType & ShopStoreActions;

export type ShopStateMiddleware = [
  ['zustand/persist', {
    carts: RootShopState['carts'];
    cartsUpdate: RootShopState['cartsUpdate'];
    transaction: RootShopState['transaction'];
  }],
];

export const initialShopState: ShopStateType = {
  cartOpen: false,
  cart: null,
  carts: [],
  cartsUpdate: 0,
  transaction: null,
};

export const createShopState = (initialState: ShopStateType = initialShopState) => {
  return createStore<RootShopState>()((set, get) => ({
    ...initialState,
    ...shopActions(set, get),
  }));
};

export const useShopState = <T,>(selector: (store: RootShopState) => T) => {
  const store = useContext(RootStoreContext);

  if (!store) {
    throw new Error("useShopStore must be used within a ShopStoreProvider");
  }

  return useStore(store.shop, selector);
};

export function useShopShallow<U>(selector: (state: RootShopState) => U): U {
  return useShopState(useShallow(selector));
};
