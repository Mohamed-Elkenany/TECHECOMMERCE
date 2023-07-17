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
        }),
        addToCart: builder.mutation({
            query: product => ({
                url: '/api/add_to_cart',
                method: "POST",
                body:product,
            })
        }),
        increaseProductCart: builder.mutation({
            query: product => ({
                url: "/api/increase_product_cart",
                method: "POST",
                body:product,
            }),
        }),
        increaseProductCartByAmount: builder.mutation({
            query: product => ({
                url: "/api/increase_product_cart_amount",
                method: "POST",
                body:product,
            }),
        }),
        decreaseProductCart: builder.mutation({
            query: product => ({
                url:"/api/decrease_product",
                method:"POST",
                body:product,
            })
        }),
        removeProductCart: builder.mutation({
            query: product => ({
                url:"/api/remove_product",
                method:"POST",
                body:product,
            })
        }),
        addLike: builder.mutation({
            query: product => ({
                url: "/api/add_to_like",
                method: "POST",
                body: product,
            }),
        }),
        removeLike: builder.mutation({
            query: product => ({
                url: "/api/remove_to_like",
                method: "POST",
                body: product,
            }),
        }),
        createOrder: builder.mutation({
            query: body => ({
                url: "/orders",
                method: "POST",
                body,
            })
        }),
    }),
})

export const { useSignupMutation,
    useLoginMutation,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useAddToCartMutation,
    useDecreaseProductCartMutation,
    useIncreaseProductCartMutation,
    useRemoveProductCartMutation,
    useIncreaseProductCartByAmountMutation,
    useAddLikeMutation,
    useRemoveLikeMutation,
    useCreateOrderMutation,
} = appApi;
export default appApi;
