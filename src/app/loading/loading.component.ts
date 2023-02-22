import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  get loading$(): Observable<boolean> {
    return this.loadingService.loading$;
  }

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {}
}
