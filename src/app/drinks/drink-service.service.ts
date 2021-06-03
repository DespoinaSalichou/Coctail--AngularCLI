import { Injectable } from '@angular/core';
import { Drink } from './drinks-model';
import { DRINKS } from './drinks-mockup';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class CoctailServiceService {

  getDrinks(): Observable<Drink[]> {
    const coctails = of(DRINKS);
    //this.message...
    return coctails;
  }

  getDrink(name: string): Observable<Drink> {
    const coctail = DRINKS.find(d => d.idDrink === name)!;
    this.messageService.add(`Coctails: fetched coctail name: ${name}`);
    return of(coctail);
  }


  constructor(private messageService: MessagesService  ) { }
}
