import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieSearchComponent } from './smoothie-search.component';

describe('SmoothieSearchComponent', () => {
  let component: SmoothieSearchComponent;
  let fixture: ComponentFixture<SmoothieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothieSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
