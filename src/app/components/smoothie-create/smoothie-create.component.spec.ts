import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieCreateComponent } from './smoothie-create.component';

describe('SmoothieCreateComponent', () => {
  let component: SmoothieCreateComponent;
  let fixture: ComponentFixture<SmoothieCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothieCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
