import { Injectable } from '@angular/core';
import { Answermodel } from '../quiz/quizmodel';
@Injectable()
export class QuizztestService {

  constructor() { }
value:Answermodel[];
  sendlist(info){
    this.value=info;
    console.log(this.value);
  }
}