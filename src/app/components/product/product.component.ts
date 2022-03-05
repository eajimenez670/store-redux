import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AppState } from 'src/app/store/app.state';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products$: Observable<readonly Product[]> = new Observable();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(actions.getProductsAction());
    this.products$ = this.store.select(x => x.products);
  }

  addToCart(product: Product) {
    this.store.dispatch(actions.addToCartAction({ product }));
  }

}
