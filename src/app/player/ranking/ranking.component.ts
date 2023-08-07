import {Component, OnInit} from '@angular/core';
import {Player} from "../model/Player";
import {RankingService} from "../ranking.service";

@Component({
  selector: 'app-player-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  providers: [ RankingService ]
})
export class RankingComponent implements OnInit {
  players: Player[] = [];
  displayedColumns: string[] = ['ranking', 'name', 'points'];

  constructor(private service: RankingService) { }

  ngOnInit(): void {
    this.service.getPlayers().subscribe({
      next: resp => {
        this.players = resp
      },
      error: () => this.players = []

    })
  }

}
