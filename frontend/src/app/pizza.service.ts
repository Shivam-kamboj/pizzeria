import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizzaapi } from './models/pizza';
import {  Ingredientapi } from './models/ingredient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  

  constructor(private http:HttpClient) { }
  getPizzas():Observable<Pizzaapi[]>{
    return this.http.get<Pizzaapi[]>("http://localhost:5000/pizzas");
  }
  getIngredients():Observable<Ingredientapi[]>{
    return this.http.get<Ingredientapi[]>("http://localhost:5000/ingredients");
  }

}
