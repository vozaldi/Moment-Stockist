import { CartModel } from "../../types/models";
import { RootShopState } from "../shopState";
import { StoreActions } from "../../types/reducer";
import moment from "moment";

export type ShopStoreActions = {
  setCartOpen: (open: boolean) => void;
  pushShopCartItem: (cart: CartModel, replace?: boolean) => void;
};

export const shopActions: StoreActions<ShopStoreActions, RootShopState> = (set, get): ShopStoreActions => ({
  // Cart Open
  setCartOpen: (open: boolean) => {
    set(state => ({ ...state, cartOpen: open }));
  },

  // Push Cart Item
  pushShopCartItem: (cart: CartModel, replace = false) => {
    const shop = get();
    const temp_id = `${cart.product_id}-${cart.product?.name}`;
    const update_at = moment().format('YYYY-MM-DD HH:mm:ss');

    let shouldPush = true;
    const carts = [...shop.carts].map((item) => {
      if (
        (item.temp_id && item.temp_id === temp_id)
        || (item.id && item.id === cart.id)
      ) {
        const price = cart.product?.price || item.price;
        const qty = replace ? cart.qty : ((item.qty || 0) + (cart.qty || 0));

        shouldPush = false;

        return { ...item, ...cart, qty, price, update_at };
      }

      return item;
    });

    if (shouldPush && carts.length < 100) {
      const price = cart.product?.price || 0;

      carts.unshift({ ...cart, temp_id, price, is_active: 1, update_at });
    }

    const result = calcShop({ ...shop, carts, cartsUpdate: shop.cartsUpdate + 1 });

    set(state => ({ ...state, ...result, cart: null }));
  },
});


const calcShop = (shop: Partial<RootShopState>): Partial<RootShopState> => {
  const { carts: cartList = [], transaction } = shop;

  const carts = cartList.filter(({ qty = 0 }) => qty > 0).map((item): CartModel => {
    const { qty = 0, price = 0 } = item;

    const subtotal = qty * price;

    return {
      ...item,
      subtotal,
      total: subtotal < 0 ? 0 : subtotal,
    };
  });

  const total = carts.filter(({ is_active }) => is_active).reduce((a, b) => {
    return a + (b.total || 0);
  }, 0);

  const grand_total = total;

  return {
    ...shop,
    carts,
    transaction: !carts.length ? null : {
      ...transaction,
      order_date: transaction?.order_date || moment().format('YYYY-MM-DD HH:mm:ss'),
      order_grand_total: grand_total,
      carts,
    },
  };
};
