import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebiteurpartrancheComponent } from './debiteurpartranche.component';

describe('DebiteurpartrancheComponent', () => {
  let component: DebiteurpartrancheComponent;
  let fixture: ComponentFixture<DebiteurpartrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebiteurpartrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebiteurpartrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
