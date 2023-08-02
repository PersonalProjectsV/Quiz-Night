import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieQuiz } from 'src/app/model/movie-quiz';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css']
})
export class QuizMainComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private httpService:HttpClient) { }

  ngOnInit(): void {
    let qId=this.route.snapshot.params['id'];
    this.router.navigate(['quiz/v1/questions',qId]);
  }

}
