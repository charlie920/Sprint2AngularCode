import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:9020/Online';

  constructor(private http: HttpClient) { }


  createQuestion(question:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl+'/addQuestion'}`,question);
  }

  getQuestionList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/Question'}`);
  }
  
}
