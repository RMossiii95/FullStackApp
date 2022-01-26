import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'],
  providers:[MovieService]
})
export class FullCRUDComponent implements OnInit {

  movies?:Movie[] = [];
  constructor(private movieService: MovieService) { 
    //this will fill out our array
    this.movieService.GetMovieList().subscribe(
      //this response represents the result of the HTTP call
      //get movie list pass along an observable
      //when you subscribe to the observable
      //the observable is done running to kick in
      (response:any) => {this.movies = response}
    )
  }

  ngOnInit() {
  }

  DeleteEntry(id: number, index: number){
    this.movieService.DeleteMovie(id).subscribe(
      (response:any) => {
        console.log(id + " was deleted successfully from our database");
        //splice goes to an index in a array, and removes the number of elements set in the 
        //second parameter. then it will return the smaller array so we set it to the original array variable
        //we do this so that we can see the deletion on our front end
        this.movies.splice(index, 1);
      }
    );
  }

  EditMovie(id: number){
    let displayPanel = document.getElementById("display" + id);
    let editPanel = document.getElementById("edit" + id);


    //if the display string is empty, by default the element is being shown
    if(displayPanel.style.display === "" || displayPanel.style.display === "inherit"){
      displayPanel.style.display = "none";
      editPanel.style.display = "inherit";
    }
    else if(displayPanel.style.display==="none"){
      displayPanel.style.display = "inherit";
      editPanel.style.display = "none";
    }
  }

}
