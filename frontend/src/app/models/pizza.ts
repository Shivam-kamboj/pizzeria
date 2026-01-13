export interface Ingredient {
  id: number;
  iname: string;
}

export interface Topping {
  id: number;
  tname: string;
  price: number;
}

export interface  Pizzaapi {
  id: number;
  type: 'veg' | 'nonveg';
  price: number;
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
  topping: Topping[];
}
export interface Pizza extends Pizzaapi{
 isAdded?: boolean;
   quantity : number;
}
