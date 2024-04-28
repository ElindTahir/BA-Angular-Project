import { Component } from '@angular/core';
import { DatabaseService } from '../service/database-service/database.service';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrl: './database-page.component.scss'
})
export class DatabasePageComponent{
  items: any[] = [];

  constructor(private databaseService: DatabaseService) { }

  loadData() {
    this.databaseService.getItems().subscribe(data => {
      this.items = data;
      console.log("Daten wurden geladen!");
    }, error => {
      console.error("Fehler beim Laden der Daten:", error);
    });
  }
}