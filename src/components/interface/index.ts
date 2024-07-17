export interface Product {
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
