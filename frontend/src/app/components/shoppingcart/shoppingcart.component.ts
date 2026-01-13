import {  Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  totalpizzacost:number=0;
  totalingredientcost:number=0;
  istrue:boolean=false;
  
 constructor(public cs:CartService){}
 ngOnInit(): void {
   this.totalpizzacost=this.cs.pizztotal();
   this.totalingredientcost=this.cs.totalIngridientCost();
 }

 increment(p:Pizza){
  p.quantity++;
  this.totalpizzacost=this.cs.pizztotal()
 }


 decrement(p:Pizza){
  p.quantity--;
  if(p.quantity===0){
    this.cs.remove(p);
  }
  this.totalpizzacost=this.cs.pizztotal();
 }
 delete(p:Pizza){
  this.cs.remove(p);
  this.totalpizzacost=this.cs.pizztotal()
 }

 toggle(){
 this.istrue=!this.istrue
 }
 pay()
 {
   if(this.cs.icart.length>0 || this.cs.cart.length>0){
  alert("Thankyou for the Order");
 
  this.cs.clear()
  this.totalpizzacost=0;
  this.totalingredientcost=0;
   }else{
    alert("please first add something to your cart");
   }
 }
 clear(){
  this.cs.clear();
    this.totalpizzacost=0;
  this.totalingredientcost=0;
 }
}
