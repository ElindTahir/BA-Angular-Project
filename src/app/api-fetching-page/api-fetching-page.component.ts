import { Component } from '@angular/core';
import { DeckOfCardsService } from '../service/deck-of-cards-service/deck-of-cards.service';

@Component({
  selector: 'app-api-fetching-page',
  templateUrl: './api-fetching-page.component.html',
  styleUrls: ['./api-fetching-page.component.scss']
})
export class ApiFetchingPageComponent {
  deckId: string = "";
  cards: any[] = [];
  numCardsToDraw = 6;  
  deckCreatedMessage = "";

  constructor(private deckOfCardsService: DeckOfCardsService) { }

  createDeck() {
    this.deckOfCardsService.createNewDeck().subscribe(data => {
      this.deckId = data.deck_id;
      this.deckCreatedMessage = "Kartendeck wurde erstellt!";
      setTimeout(() => this.deckCreatedMessage = "", 3000);
    });
  }

  drawCard() {
    if (this.numCardsToDraw > 0) {
      this.deckOfCardsService.drawCards(this.deckId, this.numCardsToDraw).subscribe(data => {
        this.cards.push(...data.cards);
      });
    }
  }
}
