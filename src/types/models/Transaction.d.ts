import { ProductModel, ProductVariant } from "./Product";

export type ReservationModel = {
  order_code?: number;
  order_date?: string;
  order_subtotal?: number;
  order_discount?: number;
  ppn_text?: string;
  order_ppn?: number;
  order_grand_total?: number;
  order_type?: 'resto' | 'gofood' | 'grabfood' | 'shopeefood';

  carts?: CartModel[];
};

export type CartModel = {
  id?: number | string;
  temp_id?: number | string;
  product_id?: number;
  product_name?: string;
  note?: string;
  qty?: number;
  price?: number;
  subtotal?: number;
  total?: number;

  is_active?: number;
  update_at?: string;

  product?: ProductModel;
};

export type CustomerModel = {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  branch?: string;
};

export type AddressModel = {
  id?: number;
  title?: string;
  name?: string;
  address?: string;
  phone?: string;
};
