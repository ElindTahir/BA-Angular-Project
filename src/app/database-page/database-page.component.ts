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
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  deleteDataSet() {
    console.log("Lösche 100 Datensätze...");
    this.databaseService.delete100Items().subscribe(response => {
      console.log("100 Datensätze wurden gelöscht:", response);
    }, error => {
      console.error("Fehler beim Löschen der 100 Datensätze:", error);
    });
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  addDataSet() {
    console.log("Füge 100 Datensätze hinzu...");
    this.databaseService.add100Items().subscribe(response => {
      console.log("100 Datensätze wurden hinzugefügt:", response);
      this.loadData();
    }, error => {
      console.error("Fehler beim Hinzufügen der 100 Datensätze:", error);
    });
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }
}
