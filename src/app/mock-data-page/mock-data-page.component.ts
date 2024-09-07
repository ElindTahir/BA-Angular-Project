import { Component } from '@angular/core';
import mockData from './Json/mock_data.json';

@Component({
  selector: 'app-mock-data-page',
  templateUrl: './mock-data-page.component.html',
  styleUrl: './mock-data-page.component.scss'
})
export class MockDataPageComponent {
  mockItems: any[] = [];

  loadMockData() {
    console.log("Lade Mock-Daten...");
    this.mockItems = mockData;
    console.log("Mock-Daten wurden geladen:", this.mockItems);
  }
}