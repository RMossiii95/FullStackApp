import { Component, OnInit } from '@angular/core';
import { ListOfToDo } from '../ListOfToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  toDo: ListOfToDo[] = [];
  constructor(private todoService: TodoService) { 
    this.todoService.GetToDoList().subscribe(
      (response: any) => {this.toDo = response}
    )
  }
  DeleteToDo(id: number){
    this.todoService.DeleteToDo(id).subscribe((response: any) => {location.reload()})
  };

  ngOnInit() {
  }

}
