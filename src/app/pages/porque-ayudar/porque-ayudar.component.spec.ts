import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueAyudarComponent } from './porque-ayudar.component';

describe('PorqueAyudarComponent', () => {
  let component: PorqueAyudarComponent;
  let fixture: ComponentFixture<PorqueAyudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorqueAyudarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueAyudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
