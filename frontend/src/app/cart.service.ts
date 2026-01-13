import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';
import { Ingredient } from './models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:Pizza[]=[];
icart:Ingredient[]=[];
  constructor() { }
  add(pizza:Pizza){
    this.cart.push(pizza);
    
  }
  remove(pizza:Pizza){
    for(let index=0; index<this.cart.length;index++){
      if(pizza.id===this.cart[index].id){
        this.cart.splice(index,1);
      }
    }
    
     
  }
  isIncart(p:Pizza): boolean{
    for(const pizza of this.cart){
      if(p.id===pizza.id){
        return true;
      }
      
    }
    return false;
  }
  Iincart(i:Ingredient):boolean{
   for(const ingredient of this.icart){
      if(i.id===ingredient.id){
        return true;
      }
      
    }
    return false;
 
  }
  addIngredient(i:Ingredient){
 this.icart.push(i);
 
  }
  removeIngredient(i:Ingredient){
    for(let index=0;index<this.icart.length;index++){
      if(i.id===this.icart[index].id){
        this.icart.splice(index,1);
      }
    }
  }
  totalIngridientCost():number{
    let totalcost=0;
    for(const i of this.icart){
      totalcost+=i.price;
    }
    return totalcost;
  }
   pizztotal(){
  let totalpizzacost=0
    for(const p of this.cart){
      totalpizzacost+=p.quantity*p.price;
    }
    return totalpizzacost;
 }
 clear(){
  this.cart=[];
  this.icart=[];
 }
}
