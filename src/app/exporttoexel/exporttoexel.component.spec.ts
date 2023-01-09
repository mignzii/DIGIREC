import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporttoexelComponent } from './exporttoexel.component';

describe('ExporttoexelComponent', () => {
  let component: ExporttoexelComponent;
  let fixture: ComponentFixture<ExporttoexelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExporttoexelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporttoexelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
