import { Pipe, PipeTransform } from '@angular/core';
import { SafeAny } from 'src/app/core-component/models/any';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: SafeAny, field: string): SafeAny[] {
    if (!Array.isArray(array)) {
      return array;
    }
    array.sort((a: SafeAny, b: SafeAny) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
    return array;
  }
}
