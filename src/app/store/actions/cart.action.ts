import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export const addToCartAction = createAction(
    '[Product Cart] Add To Cart',
    props<{ product: Product }>()
);