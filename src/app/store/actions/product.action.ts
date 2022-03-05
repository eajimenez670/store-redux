import { createAction, props } from "@ngrx/store";
import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "src/app/helpers/const";
import { Product } from "src/app/models/product";

export const getProductsAction = createAction(
    GET_PRODUCTS
);

export const getProductsSuccessAction = createAction(
    GET_PRODUCTS_SUCCESS,
    props<{ products: Product[] | unknown[] }>()
);