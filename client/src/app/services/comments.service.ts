import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/load/comments');
  }
  doComment(comment: Comment) {
    return this.http.post<Comment>('/api/send/comment', comment);
  }
}
