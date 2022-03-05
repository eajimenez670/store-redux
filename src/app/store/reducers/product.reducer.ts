import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/product";
import * as productActions from '../actions';

export const initialStateProduct: ReadonlyArray<Product | unknown> = [];

export const productReducer = createReducer(
    initialStateProduct,
    on(productActions.getProductsSuccessAction, (state, { products }) => products.map(x => x))
);