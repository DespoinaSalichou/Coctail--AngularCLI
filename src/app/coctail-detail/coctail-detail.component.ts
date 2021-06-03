import { Component, Input, OnInit } from '@angular/core';
import { Drink } from '../drinks/drinks-model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoctailServiceService } from '../drinks/drink-service.service';

@Component({
  selector: 'app-coctail-detail',
  templateUrl: './coctail-detail.component.html',
  styleUrls: ['./coctail-detail.component.css']
})
export class CoctailDetailComponent implements OnInit {


  drink: Drink | undefined;

  constructor
    (private route: ActivatedRoute,
      private coctailService: CoctailServiceService,
      private location: Location) { }


  ngOnInit(): void {
    this.getDrink();
  }

  //Get drink by id
  getDrink(): void {
    const id = String(this.route.snapshot.paramMap.get('idDrink'));
    this.coctailService.getDrink(id)
      .subscribe(drink => this.drink = drink);
  }
   goBack(): void {
    this.location.back();
  }
}
