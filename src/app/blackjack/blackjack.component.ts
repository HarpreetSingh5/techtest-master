import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  private games: Game[];
  private jackpots: Jackpot[];
  d: Game;

  constructor( private apiServicec: ApiService) { }

  ngOnInit() {
    this.apiServicec.getGames().subscribe((data)=>{
      //this.games = data.filter<Game>((d) => (d.categories.indexOf('new') > -1));
      this.games = data.filter(cat=>{return cat.categories.includes("live");})
      console.log(this.games);
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