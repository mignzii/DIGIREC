import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueetudiantComponent } from './historiqueetudiant.component';

describe('HistoriqueetudiantComponent', () => {
  let component: HistoriqueetudiantComponent;
  let fixture: ComponentFixture<HistoriqueetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
