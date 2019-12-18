import { Component } from '@angular/core';

type Product = {
  id: number,
  title: string,
  description: string,
  price: number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';

  products: Product[] = [
    {id: 1, title: 'Phone XL', description: 'A large phone with one of the best screens', price: 100},
    {id: 2, title: 'Phone mini', description: 'A great phone with one of the best cameras', price: 200},
    {id: 2, title: 'Phone standard', description: '', price: 800}
  ]
}
