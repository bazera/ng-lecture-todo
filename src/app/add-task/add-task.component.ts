import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  taskName: string = '';
  error: string = '';

  @Output() taskAdd = new EventEmitter<string>();

  addTask() {
    if (!this.taskName) {
      this.error = 'saxeli carielia';
      return;
    }

    this.taskAdd.emit(this.taskName);
    this.taskName = '';
    this.error = ''; // falsy value
  }
}
