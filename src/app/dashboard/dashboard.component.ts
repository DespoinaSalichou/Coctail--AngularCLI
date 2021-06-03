import { Component, Input, OnInit } from '@angular/core';
import { Drink } from '../drinks/drinks-model';
import { CoctailServiceService} from '../drinks/drink-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  
  drinks:Drink[] = [];  

   constructor(private drinkService: CoctailServiceService) { }


   //TOP 3 coctails
  getdrinks():void{
    this.drinkService.getDrinks().subscribe(dri => this.drinks = dri.slice(0,3));
  }

 

  ngOnInit(): void {
    this.getdrinks();
  }



}
