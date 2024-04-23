import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFetchingPageComponent } from './api-fetching-page.component';

describe('ApiFetchingPageComponent', () => {
  let component: ApiFetchingPageComponent;
  let fixture: ComponentFixture<ApiFetchingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiFetchingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiFetchingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
