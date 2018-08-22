import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    constructor(private shoppingListService : ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Pâte carbonara",
            "Les pâtes à la carbonara est un plat traditionnel italien. La recette 100% italienne ne veut pas que l'on ajoute de crème fraîche, habitude typiquement française. Découvrez donc la recette en pas à pas pour cuisiner des pâtes à la carbonara comme une vraie Mamma Italienne !",
            "https://static.750g.com/images/660-auto/f6ad72f2ac5f330143bd9bc27566dee6/comment-realiser-des-pates-carbonara-comme-en-italie.jpg",
            [
                new Ingredient('oeufs', 4),
                new Ingredient('pâte', 1),
                new Ingredient('lardon', 1)
            ]),

        new Recipe("Salade melon, jambom",
            "Salade"
            , "https://image.afcdn.com/recipe/20130708/4394_w350h250c1cx1250cy1544.jpg",
            [
                new Ingredient('jambon crue', 1),
                new Ingredient('fete', 8)
            ]),

    ];

    getRecipes() {
        return this.recipes.slice();
    }


    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }


}