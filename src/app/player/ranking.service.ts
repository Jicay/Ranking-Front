import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Player} from "./model/Player";
import {Config} from "../config";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public players: Observable<Player[]> = new Observable<Player[]>();

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    this.players = this.http.get<Player[]>(`${Config.apiRoot}/players`)
      .pipe(
        catchError(this.handleError)
      )

    return this.players;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
