export * from './User';
export * from './Product';
export * from './Transaction';

export type Modelable<T> = {
  models?: T[];
  modelsLoaded?: boolean | number;
  model?: null | T;
  modelLoaded?: boolean;
};

export type ModelablePaginate<T> = {
  models?: T[];
  modelsLoaded?: boolean;
  page: number;
  perPage: number;
  isPageEnd?: boolean;
  total?: number;
  from?: number;
  to?: number;
};

export type Searchable<T> = T & {
  search: number;
};
