import { Answer } from "./answer";

export class QuestionAnswerPair {
  constructor(
    private questionId:number,
    private answer:Answer
  ){
  }
}
