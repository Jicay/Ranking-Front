import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RankingComponent} from './ranking.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {RankingService} from "../ranking.service";
import {EMPTY} from "rxjs";
import {MockProvider} from "ng-mocks";
import {HeaderComponent} from "../../header/header.component";

describe('RankingComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingComponent],
      providers: [
        MockProvider(RankingService, {
          getPlayers: () => EMPTY
        })
      ],
      imports: [
        HttpClientModule,
        MatTableModule
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
