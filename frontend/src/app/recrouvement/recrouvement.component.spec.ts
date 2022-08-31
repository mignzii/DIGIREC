import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrouvementComponent } from './recrouvement.component';

describe('RecrouvementComponent', () => {
  let component: RecrouvementComponent;
  let fixture: ComponentFixture<RecrouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
