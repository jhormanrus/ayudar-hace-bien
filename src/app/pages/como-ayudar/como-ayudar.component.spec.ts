import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoAyudarComponent } from './como-ayudar.component';

describe('ComoAyudarComponent', () => {
  let component: ComoAyudarComponent;
  let fixture: ComponentFixture<ComoAyudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoAyudarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoAyudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
