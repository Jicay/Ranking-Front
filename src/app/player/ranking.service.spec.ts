import {fakeAsync, TestBed} from '@angular/core/testing';

import {RankingService} from './ranking.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Player} from "./model/Player";
import {Config} from "../config";

describe('RankingService', () => {
  let service: RankingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [RankingService]
    });
    service = TestBed.inject(RankingService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returns players when call is a success', fakeAsync(() => {

    let res: Player[] = [];

    service.getPlayers().subscribe(players => res = players)

    const req = httpTestingController.expectOne(`${Config.apiRoot}/players`)

    expect(req.request.method).toEqual('GET');

    req.flush([
      {
        "name": "toto",
        "ranking": 1,
        "points": 12
      },
      {
        "name": "john",
        "ranking": 2,
        "points": 10
      },
      {
        "name": "titi",
        "ranking": 2,
        "points": 10
      },
      {
        "name": "jane",
        "ranking": 4,
        "points": 0
      }
    ]);
    expect(res).toEqual([
      {
        name: "toto",
        ranking: 1,
        points: 12
      },
      {
        name: "john",
        ranking: 2,
        points: 10
      },
      {
        name: "titi",
        ranking: 2,
        points: 10
      },
      {
        name: "jane",
        ranking: 4,
        points: 0
      }
    ]);
  }));


  it('should returns no player when call is an error', fakeAsync(() => {

    let res: Player[] = [];

    service.getPlayers().subscribe({next: players => res = players, error: err => console.log(err)});

    const req = httpTestingController.expectOne(`${Config.apiRoot}/players`)

    expect(req.request.method).toEqual('GET')

    req.flush("Error", {status: 404, statusText: 'Not found'});
    expect(res).toEqual([]);
  }));
});
