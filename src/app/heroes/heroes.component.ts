import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero:Hero={id:1,name:"Windstorm",mod:false};
 heroes:Hero[]=[];
  selectedhero?:Hero;


  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  onSelect(hero:Hero){
    this.selectedhero=hero;

  }

  //retruve hero from service
  getHero():void{
  this.heroservice.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
}
