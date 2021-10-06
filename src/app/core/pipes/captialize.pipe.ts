import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captialize',
})
export class CaptializePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `${value.substring(0,1).toUpperCase()}${value.substring(1)}`;
  }
}
