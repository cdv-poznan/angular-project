import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss']
})
export class ItemListItemComponent implements OnInit {

  newTask: string;
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  ngOnInit(): void {
  }

  addTask() {
    this.taskList.push(this.newTask);
    console.log(this.taskList);
    this.newTask = '';
  }
  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }
}
