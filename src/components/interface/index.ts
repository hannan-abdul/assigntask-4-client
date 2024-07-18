export interface Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  _id: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  image: string;
  category: string;
}
export interface ProductData {
  data: Product;
}

export interface SingleProductProps {
  newdata: ProductData;
}
export interface GetAllProductsResponse {
  date: Product[];
}
