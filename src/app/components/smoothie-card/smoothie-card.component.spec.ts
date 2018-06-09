import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieCardComponent } from './smoothie-card.component';

describe('SmoothieCardComponent', () => {
  let component: SmoothieCardComponent;
  let fixture: ComponentFixture<SmoothieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
