import { Component, Input, OnInit } from '@angular/core';
import { Drink } from './drinks-model';
import { CoctailServiceService } from './drink-service.service';
import { MessagesService } from '../messages/messages.service';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {


  drinks: Drink[] = [];

  constructor(private drinkService: CoctailServiceService) {

  }
  getDrinks(): void {
    this.drinkService.getDrinks()
      .subscribe(dri => this.drinks = dri);
  }

  ngOnInit(): void {
    this.getDrinks();
  }
}




