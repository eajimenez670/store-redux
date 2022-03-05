import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/product";
import * as cartActions from '../actions';

export const initialStateCart: ReadonlyArray<Product> = [];

export const cartReducer = createReducer(
    initialStateCart,
    on(cartActions.addToCartAction, (state, { product }) => [...state, product])
);