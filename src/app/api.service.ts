import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from './models/Games';
import {Jackpot} from './models/Jackpot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getGames():Observable<Game[]>{
    return this.httpClient.get<Game[]>('http://stage.whgstage.com/front-end-test/games.php');
  }

  public getJackpot():Observable<Jackpot[]>{
    return this.httpClient.get<Jackpot[]>('http://stage.whgstage.com/front-end-test/jackpots.php');
  }
}
