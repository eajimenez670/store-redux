import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'countArray'
})
export class CountArrayPipe implements PipeTransform {

  transform(value: readonly Product[] | null): number {
    if (value)
      return value.length;

    return 0
  }

}
