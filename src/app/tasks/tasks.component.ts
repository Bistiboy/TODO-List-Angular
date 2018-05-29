import {Component, OnInit} from '@angular/core';
import {TasksModule} from 'src/app/tasks/tasks.module';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Array<TasksModule> = [];

  nameTask: string;

  constructor() { }

  ngOnInit() {
  }

  public onAjout(name: string) {
    const test = new TasksModule();
    test.name = name;
    test.id = this.tasks.length + 1;
    test.isDisabled = true;
    this.tasks.push(test);
  }

  public onDelete(i: number) {
    console.log(i);
    this.tasks.splice(i, 1);
  }

  public onModify(i: number) {
    if (this.tasks[i].isDisabled) {
      this.tasks[i].isDisabled = false;
    } else {
      this.tasks[i].isDisabled = true;
    }
  }
}
