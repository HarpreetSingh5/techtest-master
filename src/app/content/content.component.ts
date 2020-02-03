import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';
import {Merged} from '../models/merged';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private games: Game[];
  private jackpots: Jackpot[];

  constructor( private apiServicec: ApiService) {
   }

  ngOnInit() {
    this.apiServicec.getGames().subscribe((data)=>{
      this.games = data;
      console.log(this.games);
    });

    this.apiServicec.getJackpot().subscribe((jackpot)=>{
      this.jackpots = jackpot;
      console.log(this.jackpots);
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
