import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  public games: Game[];
  public jackpots: Jackpot[];
  d: Game;

  constructor( private apiServicec: ApiService) { }

  ngOnInit() {
    this.apiServicec.getGames().subscribe((data)=>{
      //this.games = data.filter<Game>((d) => (d.categories.indexOf('new') > -1));
      this.games = data.filter(cat=>{return cat.categories.includes("jackpots");})
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