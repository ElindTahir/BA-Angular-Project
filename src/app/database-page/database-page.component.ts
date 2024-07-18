import { Component } from '@angular/core';
import { DatabaseService } from '../service/database-service/database.service';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.scss']
})
export class DatabasePageComponent {

  items: any[] = [];

  constructor(private databaseService: DatabaseService) { }

  loadData() {
    console.log("Lade Daten...");
    this.databaseService.getItems().subscribe(data => {
      this.items = data;
      console.log("Daten wurden geladen:", this.items);
    }, error => {
      console.error("Fehler beim Laden der Daten:", error);
    });
  }

  restoreData() {
    console.log("Starte Datenwiederherstellung...");
    this.databaseService.restoreCSV().subscribe(response => {
      console.log("Daten wurden wiederhergestellt:", response);
    }, error => {
      console.error("Fehler beim Wiederherstellen der Daten:", error);
    });
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  deleteAllData() {
    console.log("Lösche alle Daten...");
    this.databaseService.deleteAllItems().subscribe(response => {
      console.log("Alle Daten wurden gelöscht:", response);
      this.items = [];
    }, error => {
      console.error("Fehler beim Löschen der Daten:", error);
    });
    this.loadData();
  }

  deleteDataSet() {
  }

  addDataSet() {
  }
}
