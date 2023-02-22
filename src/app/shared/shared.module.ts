import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [LoadingComponent, ButtonComponent, CardComponent],
  exports: [ButtonComponent, LoadingComponent, CardComponent],
  imports: [CommonModule],
})
export class SharedModule {}
