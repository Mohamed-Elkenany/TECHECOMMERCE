import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

//create the api.............................

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: builder => ({
        signup: builder.mutation({
            query: user => ({
                url: "/api/signup",
                method: "POST",
                body: user,
            }),
        }),
        login: builder.mutation({
            query: user => ({
                url: "/api/login",
                method: "POST",
                body: user,
            }),
        }),
        createProduct: builder.mutation({
            query: product => ({
                url: `/api/${product.id}/product`,
                method: "POST",
                body: product,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/api/product/${id}`,
                method: 'DELETE',
                body:id,
            })
        }),
        updateProduct: builder.mutation({
            query: product => ({
                url: `/api/product/${product.id}`,
                method: "PATCH",
                body:product,
            })
        })
    }),
})

export const { useSignupMutation, useLoginMutation, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation } = appApi;
export default appApi;
