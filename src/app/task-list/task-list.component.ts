import { Component, Input } from '@angular/core';
import { HeadercomponentComponent } from '../headercomponent/headercomponent.component';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  tasks: string[];
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [HeadercomponentComponent,CommonModule,TaskComponent,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  
    tasklist: Task[] = [

    {
   
    title: 'Humber',
   
    tasks: ['Task 1', 'Task 2', 'Task 3'],
   
    id: 1,
   
    },
   
    {
   
    title: 'MERN',
   
    tasks: ['Lab', 'Project', 'Quiz'],
   
    id: 2,
   
    },
   
    {
   
    title: 'Java',
   
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
   
    id: 3,
   
    },
   
    ];

    searchtext: string = '';

    deleteTask(taskIndex: number) {
      console.log(taskIndex);
      // this.tasklist.forEach(task => {
      this.tasklist = this.tasklist.filter(task => task.id !== taskIndex);
      //});
    }

    get filteredTasks() {
      if (!this.searchtext) {
        return this.tasklist;
      }
      return this.tasklist.filter(task =>
        task.title.toLowerCase().includes(this.searchtext.toLowerCase())
      );
    }

}
