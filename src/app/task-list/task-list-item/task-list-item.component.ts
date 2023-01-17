import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() task: string = '';
  @Input() index: number = -1;

  @Output() delete = new EventEmitter<number>();

  getItemClass(index: number) {
    return {
      red: index % 2 == 0,
      blue: index % 2 == 1,
    };
  }

  showNumber(index: number) {
    return index % 2 == 0;
  }

  deleteItem(index: number) {
    this.delete.emit(index);
  }
}
