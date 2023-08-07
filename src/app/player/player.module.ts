import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RankingComponent} from './ranking/ranking.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    RankingComponent
  ],
  exports: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PlayerModule { }
