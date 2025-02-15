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
  branch_id?: number;
  division_id?: number;
  temp_id?: number | string;
  product_id?: number;
  pv_id?: number;
  table_id?: number;
  product_name?: string;
  note?: string;
  qty?: number;
  price?: number;
  discount?: number;
  subtotal?: number;
  total?: number;

  /**
   * Cooking status
   * 
   * @var cooking_status 1: Pending; 2: Process; 3: Finish; 0: Cancel;
   */
  cooking_status?: number;
  print_count?: number;
  is_active?: number;

  tax?: number;
  qtyMin?: number;

  type?: CartItemType;
  order_type?: ReservationModel['order_type'];

  table?: TableModel;
  product?: ProductModel;
  variant?: ProductVariant;
  promo?: PromoModel;
};

export type CustomerModel = {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  branch?: string;
};

export type TableModel = {
  id?: number;
  name?: string;
};

export type DiscountModel = {
  id?: number;
  name?: string;
  amount?: number;
};

export type TaxModel = {
  id?: number;
  name?: string;
  percentage?: string;
  is_default?: number;
};

export type PromoModel = {
  id?: number;
  name?: string;
  description?: string;
  date_from?: string;
  date_till?: string;
  discount_nominal?: number;
  discount_percent?: number;
  discount_max?: number;
  is_transaction?: number;
};
