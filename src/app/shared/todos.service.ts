import { Injectable } from '@angular/core'

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})

export class TodosService {
    public todos: Todo[] = [
    {id: 1, title: '12345', completed: false, date: new Date()},
    {id: 2, title: '11111', completed: true, date: new Date()},
    {id: 3, title: '22222', completed: false, date: new Date()}
  ]

  onToggle(id: number) {
    const index = this.todos.findIndex(t=> t.id === id)
    this.todos[index].completed = !this.todos[index].completed
  }
}