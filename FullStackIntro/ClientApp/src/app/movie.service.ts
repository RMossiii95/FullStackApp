import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
url:string = "Movie";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.url = baseUrl + this.url;
  }

  GetMovieList(){
    return this.http.get(this.url)
  }

  //think of observble as the pizza order, I have told papajohns what I want and now I need to wait for it to come in
  GetMovie(id: number) {
    return this.http.get(this.url + "/get/" + id);
  }

  CreateMovie(m:Movie){
    //if an api call inst working, first thing to check should be the URL

    //console.log(this.url + "/makeNew/")
    console.log(m);
    return this.http.post(this.url + "/makeNew/", m);
  }

  DeleteMovie(id:number){
    return this.http.delete(this.url + "/delete/" + id)
  }

  UpdateMovie(newMovie:Movie, id:number){
    return this.http.put(this.url + "/update/" + id, newMovie);
  }
}
