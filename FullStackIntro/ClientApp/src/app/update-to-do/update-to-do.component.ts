import { Component, Input, OnInit } from '@angular/core';
import { ListOfToDo } from '../ListOfToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-to-do',
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css'],
  providers: [TodoService]
})
export class UpdateToDoComponent implements OnInit {
@Input() Id: number;
todo?: ListOfToDo;

  constructor(private todoService: TodoService) { 
    this.todoService.GetToDo(this.Id).subscribe(
      (response: any) => {this.todo = response}
    )
  }

  UpdateToDo(id: number){
    let nameOfTeamMember = (<HTMLInputElement>document.getElementById("nameOfTeamMember")).value;
    let sdescription = (<HTMLInputElement>document.getElementById("shortDescription")).value;
    let dueDate = (<HTMLInputElement>document.getElementById("dueDate")).value;
    let newToDo: ListOfToDo = {id: 0, nameOfTeamMemver: nameOfTeamMember, shortDescription: sdescription, dueDate: dueDate, completed: false};
    this.todoService.UpdateToDo(newToDo).subscribe(
      (response: any) => {location.reload()}
    );
  }

  ngOnInit() {
  }

}
