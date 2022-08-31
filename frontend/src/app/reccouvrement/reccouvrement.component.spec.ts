import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccouvrementComponent } from './reccouvrement.component';

describe('ReccouvrementComponent', () => {
  let component: ReccouvrementComponent;
  let fixture: ComponentFixture<ReccouvrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReccouvrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReccouvrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
