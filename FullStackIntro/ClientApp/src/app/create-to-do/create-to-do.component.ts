import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ListOfToDo } from '../ListOfToDo';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css'],
  providers: [TodoService]
})
export class CreateToDoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  createNewToDo(){
    let nameOfTeamMember = (<HTMLInputElement>document.getElementById("nameOfTeamMember")).value;
    let sdescription = (<HTMLInputElement>document.getElementById("shortDescription")).value;
    let dueDate = (<HTMLInputElement>document.getElementById("dueDate")).value;
    let newToDo: ListOfToDo = {id: 0, nameOfTeamMemver: nameOfTeamMember, shortDescription: sdescription, dueDate: dueDate, completed: false};
    this.todoService.InsertToDo(newToDo).subscribe(
      (response: any) => {location.reload()}
    );
  }

  ngOnInit() {
  }

}
