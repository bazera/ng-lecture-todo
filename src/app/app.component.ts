import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: string[] = [];

  taskAddHandler(task: string) {
    this.tasks.push(task);
  }

  taskDeleteHandler(index: number) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }
}
