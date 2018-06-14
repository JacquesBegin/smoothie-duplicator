import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieCreateDialogComponent } from './smoothie-create-dialog.component';

describe('SmoothieCreateDialogComponent', () => {
  let component: SmoothieCreateDialogComponent;
  let fixture: ComponentFixture<SmoothieCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothieCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
