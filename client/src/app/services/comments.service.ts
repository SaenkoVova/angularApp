import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Comment} from '../models/Comment';
import {HttpClient} from '@angular/common/http';
import {Respond} from '../models/Respond';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private doCommentSubject$ = new BehaviorSubject(false);
  doCommentChanged$ = this.doCommentSubject$.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getComments(id): Observable<Comment[]> {
    return this.http.post<Comment[]>('/api/load/comments', {id});
  }
  doComment(comment: Comment) {
    return this.http.post<Comment>('/api/send/comment', comment);
  }
  doRespond(respond: Respond) {
    return this.http.post<Respond>('/api/send/respond', respond);
  }
  doCommentEvent() {
    this.doCommentSubject$.next(true);
  }
}
