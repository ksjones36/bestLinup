import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayersService {

  constructor() { }

  adjustPoints(): Observable<Player[]> {
    const players = PLAYERS;
    players.forEach(player => {
      player.adjusted = Math.round(((((player.ppg + player.projectedPoints) / 2) / player.salary) * 1000) * 100) / 100;
      return player;
    });
    return of(players);
  }

}
