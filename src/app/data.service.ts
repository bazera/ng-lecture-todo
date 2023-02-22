import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): Observable<string[]> {
    return of(['Dog', 'Cat', 'Mouse']).pipe(delay(3000));
  }

  getUsernames(): Promise<string[]> {
    return new Promise((resolve) => {
      resolve(['bazera', 'kote', 'beso', 'beru']);
    });
  }
}

const isNonEmpty = <T>(arr: T[]): arr is [T, ...T[]] => !arr?.length;

interface Record {
  id: number;
  name: string;
}

let a: number;

const recordset: Record[] = [];

function getPerson() {
  // if (isNonEmpty(recordset)) {
  //   throw 'error';
  // }

  return recordset[0];
}
