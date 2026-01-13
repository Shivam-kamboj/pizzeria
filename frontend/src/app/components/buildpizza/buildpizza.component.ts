import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart.service';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent implements OnInit{
  Idata:any[]=[];
  totalcost:number=0;
 constructor(private cs:CartService,private ingredients:PizzaService){}
ngOnInit(): void {
  this.fetchIngredeints();
  this.totalcost=this.cs.totalIngridientCost();
}

 fetchIngredeints(){
  this.ingredients.getIngredients().subscribe((res)=>{
    this.Idata=res.map((ingredient:any)=>({
      ...ingredient,
      checked:this.cs.Iincart(ingredient)
    }));
    console.log(this.Idata);//debug
  })
 }
 togglefunction(ingredient:any){
  if(ingredient.checked){
     this.cs.addIngredient(ingredient);
     this.totalcost=this.totalcost+ingredient.price;
   
    console.log(this.cs.icart)
  
  }else{
      this.totalcost=this.totalcost-ingredient.price;
    this.cs.removeIngredient(ingredient);
    
    console.log(this.cs.icart);  

  }
   
 }

}
