export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type ProductInput = Omit<Product, "id">;

type SuccessResult<D> = {
  success: true;
  data: D;
  status: number;
};

type FailureResult = {
  success: false;
  error: string;
  status: number;
};

export type Result<D> = SuccessResult<D> | FailureResult;