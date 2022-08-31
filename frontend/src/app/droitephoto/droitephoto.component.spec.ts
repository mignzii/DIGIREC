import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitephotoComponent } from './droitephoto.component';

describe('DroitephotoComponent', () => {
  let component: DroitephotoComponent;
  let fixture: ComponentFixture<DroitephotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitephotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
