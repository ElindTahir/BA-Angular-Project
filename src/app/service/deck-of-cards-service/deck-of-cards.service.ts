import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeckOfCardsService {
  private baseUrl = 'https://deckofcardsapi.com/api/deck';

  constructor(private http: HttpClient) { }

  createNewDeck(): Observable<any> {
    return this.http.get(`${this.baseUrl}/new/shuffle/`);
  }

  drawCards(deckId: string, count: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/${deckId}/draw/?count=${count}`);
  }
}