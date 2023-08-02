import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './core/quiz/quiz.component';
import { QuizMainComponent } from './core/quiz-main/quiz-main.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  {
    path: 'quiz/:id', component: QuizMainComponent,
    children:[
      {path:'questions/:id',component:QuizComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
