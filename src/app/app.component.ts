import { Component } from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';

  public todos:Todo[] = [
    {id: 1, title: '12345', completed: false, date: new Date()},
    {id: 2, title: '11111', completed: true, date: new Date()},
    {id: 3, title: '22222', completed: false, date: new Date()}
  ]
}
