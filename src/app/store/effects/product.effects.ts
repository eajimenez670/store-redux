import { Injectable } from "@angular/core";
import { DocumentChangeAction } from "@angular/fire/compat/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "src/app/helpers/const";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";
import * as actions from '../actions';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(GET_PRODUCTS),
        mergeMap(() => this.productService.getProducts()
            .pipe(
                map(data => {
                    const products = data.map((snap) => snap.payload.doc.data());
                    return actions.getProductsSuccessAction({ products })
                }),
                catchError(() => EMPTY)
            )
        )
    ));

    constructor(private actions$: Actions, private productService: ProductService) { }
}