import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { map, Observable } from 'rxjs';

const unsafeWords = ['cudisityva1', 'cudisityva2', 'cudisityva3'];

export function forbiddenWordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isUnsafeWord = unsafeWords.includes(control.value);
    console.log(isUnsafeWord);
    return isUnsafeWord ? { isUnsafe: control.value } : null;
  };
}

const alreadyUsedEmails = [
  'bazera.g@gmail.com',
  'kote@gmail.com',
  'beru@gmail.com',
];

class ApiService {
  checkUsedEmail(email: string): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (alreadyUsedEmails.includes(email)) {
          observer.next(true);
        } else {
          observer.next(false);
        }

        observer.complete();
      }, 2000);
    });
  }
}

export function emailValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const apiService = new ApiService();
    return apiService.checkUsedEmail(control.value).pipe(
      map((isUsed) => {
        return isUsed ? { isUsed } : null;
      })
    );
  };
}
