import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcriturecomptableComponent } from './ecriturecomptable.component';

describe('EcriturecomptableComponent', () => {
  let component: EcriturecomptableComponent;
  let fixture: ComponentFixture<EcriturecomptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcriturecomptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcriturecomptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
