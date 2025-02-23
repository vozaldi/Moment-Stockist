export type ProductModel = {
  id?: number;
  sku?: string;
  name?: string;
  description?: string;
  price?: number;
  color?: string;
  image?: string;
  decoration_url?: string;
};

export type ProductVariant = {
  id?: number;
};

export type CategoryModel = {
  id?: number;
  name?: string;
  slug?: string;
  image_url?: string;

  products?: ProductModel[];
};

export type TestimonyModel = {
  id?: number;
  name?: string;
  comment?: string;
  image_url?: string;
};
