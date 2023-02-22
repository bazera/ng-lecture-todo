import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  from,
  interval,
  Observable,
  of,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  obs$: Observable<number[]> = of([3]);

  constructor() {}

  ngOnInit(): void {}
}
