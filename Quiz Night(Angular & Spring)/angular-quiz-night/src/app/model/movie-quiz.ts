import { Question } from "./question";

export class MovieQuiz {
  constructor(
    public id:number,
    public name:string,
    public questions:Question[]
  ){}
}
