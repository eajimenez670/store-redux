import { Product } from "../models/product";

export interface AppState {
    productsCart: ReadonlyArray<Product>;
    products: ReadonlyArray<Product>;
}