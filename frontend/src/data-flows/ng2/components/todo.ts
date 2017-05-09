import {Component, Input} from 'angular2/core';
import {TodoService} from '../services/todos';

@Component({
  selector: 'Todo',
  template: `
    <li [ngClass]="{completed: todo.completed}"
      (click)="toggle(todo)"
      class="list-group-item">
      {{todo.title}}
    </li>
  `
})
export class Todo {
  @Input() todo;
  constructor (public todoService: TodoService) {}
  toggle (todo) {
    this.todoService.toggle(todo);
  }
}