import { EpdfComponent } from './epdf/epdf.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { QuizComponent } from './quiz/quiz.component';

import { QuizztestComponent } from './quizztest/quizztest.component';
import { QuizztestService } from './quizztest/quizztest.service';

 const route:Routes=[
  { path: '', component: QuizztestComponent },
  { path: 'quizz', component: QuizComponent}
  ]


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(route) ],
  declarations: [ AppComponent, QuizComponent, QuizztestComponent , EpdfComponent],
  bootstrap:    [ AppComponent ],
  providers: [ QuizztestService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

