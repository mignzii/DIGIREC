import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremieretrancheComponent } from './premieretranche.component';

describe('PremieretrancheComponent', () => {
  let component: PremieretrancheComponent;
  let fixture: ComponentFixture<PremieretrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremieretrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremieretrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
