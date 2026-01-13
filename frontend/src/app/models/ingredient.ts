export interface Ingredientapi {
  id: number;
  tname: string;
  price: number;
  image: string;
  
}
export interface Ingredient extends Ingredientapi{
     isSelected?: boolean;
}