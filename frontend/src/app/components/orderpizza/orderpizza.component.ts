import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Pizza, Pizzaapi } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit{
  pizzadata:Pizza[]=[];
  constructor(private ps:PizzaService ,private cs:CartService){}

  
   ngOnInit(): void {
    this.fetchpizza();
     
   }
   fetchpizza(){
     this.ps.getPizzas().subscribe((res:Pizzaapi[])=>{
      
      this.pizzadata=res.map((pizza:Pizzaapi):Pizza =>{
        const p:Pizza={ ...pizza,
         quantity:1
        };
        p.isAdded=this.cs.isIncart(p);
        return p;


      });
      console.log(this.pizzadata)
     })
   }
   toggle(p:Pizza){
     if(p.isAdded){
     this.cs.remove(p);
      p.isAdded=!p.isAdded;
       console.log(this.cs.cart);
     }else{
       this.cs.add(p);
      
      p.isAdded=!p.isAdded;
      console.log(this.cs.cart);
     }
   }

}
