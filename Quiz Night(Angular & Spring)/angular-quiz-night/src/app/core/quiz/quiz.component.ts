import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/model/answer';
import { MovieQuiz } from 'src/app/model/movie-quiz';
import { Question } from 'src/app/model/question';
import { QuestionAnswerPair } from 'src/app/model/question-answer-pair';
import { MovieQuizServiceService } from 'src/app/service/movie-quiz-service.service';
import { QuizScoreComponent } from '../dialog/quiz-score/quiz-score.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: number;
  movie: MovieQuiz;
  trackQuestions: Question[];
  movies: MovieQuiz[];

  answers: QuestionAnswerPair[] = [];

  hashMap: Map<number, Answer>;


  answerAllError: boolean;


  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpClient, private matDialog: MatDialog, private movieQuizService:MovieQuizServiceService) { }

  radioChanged(qIndex: number, qAnswer: Answer) {
    this.hashMap.set(qIndex, qAnswer);
  }

  submit() {
    if (this.hashMap.size < this.movie.questions.length) {
      this.answerAllError = true;
    }
    else {
      this.answerAllError = false;
      this.openScorePopup();
    }
  }

  fetchMovies(quizId:number){
    this.movieQuizService.getMovies().subscribe(
      data=>{
       this.movies=data;
       console.log(data)
       this.filterId(this.quizId)
       console.log(this.movie)
      }
    )
  }

  filterId(quizId: number) {
    this.movie = this.movies.filter(x => x.id == quizId)[0];
  }

  openScorePopup() {
    const dialogRef=this.matDialog.open(QuizScoreComponent, {
      width: '380px',
      data: {
        qAnswerPair:this.hashMap
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['']);
    });
  }
  backToHome(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['id'];
    this.fetchMovies(this.quizId);
    this.hashMap = new Map<number, Answer>;
    this.answerAllError = false;
  }

}
