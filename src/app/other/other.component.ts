import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  private games: Game[];
  private jackpots: Jackpot[];
  virtual: Game[];
  ball: Game[];

  constructor( private apiServicec: ApiService) { }

  ngOnInit() {
    this.apiServicec.getGames().subscribe((data)=>{
      //this.games = data.filter<Game>((d) => (d.categories.indexOf('new') > -1));
      this.games = data.filter(cat=>{return cat.categories.includes("fun")});
      this.virtual = data.filter(cat=>{return cat.categories.includes("virtual")});
      this.ball = data.filter(cat=>{return cat.categories.includes("ball")});
      this.virtual.push(...this.ball);
      
      this.games.push(...this.virtual)
      console.log(this.games);
      //console.log(this.d)
    });

    this.apiServicec.getJackpot().subscribe((jackpot)=>{
      this.jackpots = jackpot;
    });
    this.startTimer();
  }
  startTimer(){
    setInterval(() => {
      this.apiServicec.getJackpot().subscribe((jackpot) => {
        this.jackpots = jackpot;
        //console.log(this.jackpots);
      });
    }, 10000 );
  }

}