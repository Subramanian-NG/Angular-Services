import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  // @Input() title!: string;
  // @Input() tasks!: string[];

  @Input() task: any;

  @Output() taskDeleted = new EventEmitter<number>();

  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }
}
