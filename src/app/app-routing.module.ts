import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component'
import {NewGamesComponent} from './new-games/new-games.component'
import {SlotsComponent} from './slots/slots.component'
import {JackpotsComponent} from './jackpots/jackpots.component'
import {LiveComponent} from './live/live.component'
import {BlackjackComponent} from './blackjack/blackjack.component'
import {RouletteComponent} from './roulette/roulette.component'
import {TableComponent} from './table/table.component'
import {PokerComponent} from './poker/poker.component'
import {OtherComponent} from './other/other.component'

const routes: Routes = [
  {path:'slots', component: SlotsComponent , pathMatch: 'full'},
  {path:'jackpots', component: JackpotsComponent , pathMatch: 'full'},
  {path:'live', component: LiveComponent , pathMatch: 'full'},
  {path:'blackjack', component: BlackjackComponent , pathMatch: 'full'},
  {path:'roulette', component: RouletteComponent , pathMatch: 'full'},
  {path:'table', component: TableComponent , pathMatch: 'full'},
  {path:'poker', component: PokerComponent , pathMatch: 'full'},
  {path:'other', component: OtherComponent , pathMatch: 'full'},
  {path:'new-games', component: NewGamesComponent , pathMatch: 'full'},
  {path:'', component: ContentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
