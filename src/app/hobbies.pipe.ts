import { Pipe, PipeTransform } from '@angular/core';
import { Hobbies } from './app.model';

@Pipe({
  name: 'hobbies',
})
export class HobbiesPipe implements PipeTransform {
  hobbies = [Hobbies.Reading, Hobbies.Gym];

  transform(
    arr: any,
    used: (string | null)[] | undefined,
    self: string | null
  ): string[] {
    return this.hobbies.filter((x) => {
      if (x === self) {
        return true;
      }

      if (!used?.includes(x)) {
        return true;
      }

      return false;
    });
  }
}
