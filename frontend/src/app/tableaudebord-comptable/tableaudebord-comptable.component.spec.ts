import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaudebordComptableComponent } from './tableaudebord-comptable.component';

describe('TableaudebordComptableComponent', () => {
  let component: TableaudebordComptableComponent;
  let fixture: ComponentFixture<TableaudebordComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableaudebordComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaudebordComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
