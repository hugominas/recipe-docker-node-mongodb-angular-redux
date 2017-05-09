import {Component, Input} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from '../services/todos';

@Component({
  selector: 'TodoList',
  template: `
    <ul class="list-group">
      <Todo *ngFor="#todo of todos" [todo]="todo"></Todo>
    </ul>
  `,
  directives: [Todo]
})
export class TodoList {
  todos;
  constructor (todoService: TodoService) {
    this.todos = todoService.todos;
  }
}