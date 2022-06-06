import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisiemetrancheComponent } from './troisiemetranche.component';

describe('TroisiemetrancheComponent', () => {
  let component: TroisiemetrancheComponent;
  let fixture: ComponentFixture<TroisiemetrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroisiemetrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisiemetrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
