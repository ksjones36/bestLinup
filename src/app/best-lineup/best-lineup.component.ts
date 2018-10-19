import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-best-lineup',
  templateUrl: './best-lineup.component.html',
  styleUrls: ['./best-lineup.component.css']
})
export class BestLineupComponent implements OnInit {

  players: Player[];
  currentSalary: number;
  playerNames: string[];

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    this.playerService.adjustPoints().subscribe((players) => {
      this.createBestLineup(players);
    });
  }

  createBestLineup(players: Player[]) {
  this.currentSalary = 0;
  this.playerNames = [];

    let qbs = players.filter(player => player.position === 'QB');
    qbs = qbs.sort((a, b) => b.projectedPoints - a.projectedPoints);
    this.addPlayerToLineup(qbs, 1);

    let rbs = players.filter(player => player.position === 'RB');
    rbs = rbs.sort((a, b) => b.projectedPoints - a.projectedPoints);
    this.addPlayerToLineup(rbs, 2);

    let wrs = players.filter(player => player.position === 'WR');
    wrs = wrs.sort((a, b) => b.projectedPoints - a.projectedPoints);
    this.addPlayerToLineup(wrs, 3);

    let tes = players.filter(player => player.position === 'TE');
    tes = tes.sort((a, b) => b.projectedPoints - a.projectedPoints);
    this.addPlayerToLineup(tes, 1);

    let flex = players.filter(player =>
      (player.position === 'RB' || player.position === 'WR' || player.position === 'TE') &&
      !this.playerNames.includes(player.playerName));
    flex = flex.sort((a, b) => b.projectedPoints - a.projectedPoints);
    this.addPlayerToLineup(flex, 1);

    let des = players.filter(player => player.position === 'D');
    des = des.sort((a, b) => b.projectedPoints - a.projectedPoints);
    this.addPlayerToLineup(des, 1);

    console.log(this.currentSalary, this.playerNames);
  }

  addPlayerToLineup(players: Player[], count) {
    for (let i = 0; i < count; i++) {
      this.currentSalary += players[i].salary;
      this.playerNames.push(players[i].playerName);
    }
  }

}
