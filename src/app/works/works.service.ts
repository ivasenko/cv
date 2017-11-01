import { Injectable } from '@angular/core';
import {Work} from './work';
import 'rxjs/add/operator/map';

@Injectable()
export class WorksService {

  private works: Work[] =[
    new Work("PhotoTime", "", "./assets/img/phototime.png", ['HTML', 'CSS', 'PixelPerfect'], "https://github.com/ivasenko/photo_time"),
    new Work("LooM", "", "./assets/img/loom.png", ['HTML', 'CSS', 'Javascript', 'JQuery'], "https://github.com/ivasenko/loom"),
    new Work("Recipes", "", "./assets/img/recipes.png", ['HTML', 'CSS', 'ReactJS',  'Redux'], "https://github.com/ivasenko/RecipeBook"),
    new Work("Portfolio", "", "./assets/img/portfolio.png", ['HTML', 'CSS', 'Javascript'], "https://ivasenko.github.io/portfolio/"),
    new Work("Metr", "", "./assets/img/metr.png", ['HTML', 'SCSS'], "https://github.com/ivasenko/metr"),
    new Work("Strict", "", "./assets/img/strict.png", ['HTML', 'CSS', 'Javascript'], "https://github.com/ivasenko/strict"),
    new Work("Battleship", "", "./assets/img/battleship.png", ['HTML', 'CSS', 'Angular 4'], "https://github.com/ivasenko/Battleship"),
    new Work("Weather", "", "./assets/img/weather.png", ['HTML', 'CSS', 'Angular 4', 'SCSS'], "https://github.com/ivasenko/weather")
  ]

  constructor() {
  }

  getWorks(){
    return this.works;
  }
    getWork(id: number){
    return this.works[id];
  }
}
