import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteItemHandler(index: number) {
    this.delete.emit(index);
  }
}
