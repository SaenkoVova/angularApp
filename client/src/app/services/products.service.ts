import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../models/Product';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private node: Subject<any> = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  get node$() {
    return this.node.asObservable().pipe(filter(node => !!node));
  }
  addNode(data: Product) {
    this.node.next(data);
  }
  getProducts(pageSize, pageIndex): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const req = {pageSize, pageIndex};
    return this.http.post<any>('/api/load/products', req, httpOptions);
  }

  getProduct(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const req = { id };
    return this.http.post<any>('/api/load/product', req, httpOptions);
  }
  getCategories() {
    return this.http.get<any>('/api/load/categories');
  }

}
