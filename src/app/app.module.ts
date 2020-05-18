import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


const routes :Routes=[
  {path: 'AddQuestion', component : CreateQuestionComponent},
  {path: 'QuestionList', component : QuestionListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
