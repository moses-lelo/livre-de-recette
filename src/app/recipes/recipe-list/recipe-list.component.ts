import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Une recette test","Test description","https://static.cuisineaz.com/400x320/i97668-salade-de-poulet.jpg"),

  ];

  constructor() { }

  ngOnInit() {
  }

}
