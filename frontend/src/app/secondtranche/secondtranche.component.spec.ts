import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtrancheComponent } from './secondtranche.component';

describe('SecondtrancheComponent', () => {
  let component: SecondtrancheComponent;
  let fixture: ComponentFixture<SecondtrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondtrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
