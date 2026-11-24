import { Component, OnInit } from '@angular/core';
import {Itodo} from 'src/app/model/todo'

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
 todosArr:Array<Itodo>=[
  {
    todoItem:"JS",
    todoId:"123",
    isCompleted:true
  },

  {
    todoItem:"CSS",
    todoId:"124",
    isCompleted:true
  },

  {
    todoItem:"SCSS",
    todoId:"125",
    isCompleted:false
  }
 ]

  
  constructor() { }

  ngOnInit(): void {
  }
  onTodoAdd(newObj:Itodo):void{
    this.todosArr.unshift(newObj)
  } 

}
