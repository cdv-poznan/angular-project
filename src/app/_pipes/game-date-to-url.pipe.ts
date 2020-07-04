import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDateToUrl',
})
export class GameDateToUrlPipe implements PipeTransform {
  transform(value: any): string {
    if (value !== undefined) {
      return value.replace(/-/g, "");
    } else {
      return '';
    }
  }
}
