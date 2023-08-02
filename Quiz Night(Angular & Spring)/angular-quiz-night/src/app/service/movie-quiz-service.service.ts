import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieQuiz } from '../model/movie-quiz';

@Injectable({
  providedIn: 'root'
})
export class MovieQuizServiceService {

  private baseUrl = 'http://localhost:8080/api/movies';
  constructor(private httpClient: HttpClient) { }

  public getMovies(): Observable<any> {
    const url = 'http://localhost:8080/api/movies';
    return this.httpClient.get<MovieQuiz>(url);
  }




}
interface GetResponse {
  _embedded: {
    movies: MovieQuiz[];
  }
}
