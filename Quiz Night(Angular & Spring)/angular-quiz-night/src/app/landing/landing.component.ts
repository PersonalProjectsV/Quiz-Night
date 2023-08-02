import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieQuiz } from '../model/movie-quiz';
import { MovieQuizServiceService } from '../service/movie-quiz-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  movies:MovieQuiz[];

  constructor(private router:Router, private httpService:HttpClient,private movieQuizService:MovieQuizServiceService) { }

  movieSelected(movie:MovieQuiz){
    this.router.navigate(['quiz',movie.id]);

  }

  fetchMovies(){
    this.movieQuizService.getMovies().subscribe(
      data=>{
       this.movies=data;
      }
    )
  }

  ngOnInit(): void {
    this.fetchMovies();
  }
}
