import { GetAllProductsResponse } from "../../../components/interface";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProductsResponse, void>({
      query: () => ({
        url: "/allproducts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
