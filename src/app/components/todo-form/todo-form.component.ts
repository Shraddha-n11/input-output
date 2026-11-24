import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Itodo } from 'src/app/model/todo';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@ViewChild("todoForm") todoForm !: NgForm 
 @Output() newTodoObj = new EventEmitter<Itodo>();
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(): void {
  if (this.todoForm.invalid) {
    this.todoForm.form.markAllAsTouched();
  } else {
    let val = this.todoForm.form.value;

    let newTodo: Itodo = {
      todoItem: val.todoItem,
      todoId: Date.now().toString(),
      isCompleted: false
    };

    this.newTodoObj.emit(newTodo);

    this.todoForm.resetForm();
  }
}

}
