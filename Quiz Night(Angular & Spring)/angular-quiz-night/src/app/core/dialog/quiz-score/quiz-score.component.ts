import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Answer } from 'src/app/model/answer';

interface DialogProcessInstanceData {
  qAnswerPair:Map<number,Answer>;
}


@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogProcessInstanceData,public dialogRef:MatDialogRef<QuizScoreComponent>) { }

  results:Map<number,Answer>;
  score:number;
  ngOnInit(): void {
    this.results=this.data.qAnswerPair;
    this.score=0;
    this.calculateScore()
  }

  calculateScore(){
    for(let i=0;i<this.results.size;i++){
      let curAnswer=this.results.get(i);
      if(curAnswer?.correct)
      {
        this.score++;
      }
    }
  }

  getScorePercentage(){
    return (this.score/this.results.size)*100
  }


}
