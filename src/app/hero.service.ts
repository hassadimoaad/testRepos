import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { from, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]>{
    return of(HEROES);
  }
  constructor() { }
}
