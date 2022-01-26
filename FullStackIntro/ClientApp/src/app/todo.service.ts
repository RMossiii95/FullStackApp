import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfToDo } from './ListOfToDo';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
url: string = "ListOfToDo"
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.url = baseUrl + this.url;
  }
  GetToDoList(): Observable<any>{
    return this.http.get(this.url)
  }
  GetToDo(id: number){
    return this.http.get(this.url + "/GetToDo/" + id);
  }
  InsertToDo(tdi: ListOfToDo){
    return this.http.post(this.url + "/CreateToDo",tdi)
  }
  UpdateToDo(tdi: ListOfToDo){
    return this.http.put(this.url + "/UpdateToDo",tdi)
  }
  DeleteToDo(id: number){
    return this.http.delete(this.url + "/DeleteToDo/" + id);
  }
}
