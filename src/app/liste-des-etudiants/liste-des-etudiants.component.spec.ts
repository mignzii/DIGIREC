import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesEtudiantsComponent } from './liste-des-etudiants.component';

describe('ListeDesEtudiantsComponent', () => {
  let component: ListeDesEtudiantsComponent;
  let fixture: ComponentFixture<ListeDesEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
