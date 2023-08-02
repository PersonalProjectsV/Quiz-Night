import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './core/quiz/quiz.component';
import { LandingComponent } from './landing/landing.component';
import { QuizMainComponent } from './core/quiz-main/quiz-main.component';
import { QuizScoreComponent } from './core/dialog/quiz-score/quiz-score.component';
import { MatDialogModule} from '@angular/material/dialog'
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    QuizComponent,
    QuizMainComponent,
    QuizScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
